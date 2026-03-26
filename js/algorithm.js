/**
 * Core recommendation algorithm.
 * All math uses a normalized 0–1 scale (0 = finest, 1 = coarsest espresso setting).
 * Converts to grinder-specific numbers at the end.
 */

const ROAST_OFFSETS = {
  "light": -0.20,
  "medium-light": -0.10,
  "medium": 0.00,
  "medium-dark": 0.10,
  "dark": 0.20
};

function getDaysSinceRoast(roastDateStr) {
  const roastDate = new Date(roastDateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffMs = today - roastDate;
  return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
}

function getFreshnessAdjustment(days) {
  if (days <= 2) return 0.10;
  if (days <= 7) return 0.05;
  if (days <= 14) return 0.00;
  if (days <= 21) return -0.05;
  if (days <= 28) return -0.10;
  return -0.15;
}

function getFreshnessLabel(days) {
  if (days <= 2) return "very fresh (degassing)";
  if (days <= 7) return "fresh";
  if (days <= 14) return "in the sweet spot";
  if (days <= 21) return "starting to age";
  if (days <= 28) return "getting old";
  return "stale";
}

function roundToStep(value, stepSize) {
  return Math.round(value / stepSize) * stepSize;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatSetting(value, displayFormat, grinder) {
  if (displayFormat === "macro-micro") {
    const macro = Math.floor(value);
    const microLetters = ["A", "B", "C", "D", "E", "F"];
    const microIndex = Math.round((value - macro) * 5);
    const letter = microLetters[clamp(microIndex, 0, 5)];
    return macro + letter;
  }
  if (displayFormat === "decimal") {
    return value % 1 === 0 ? value.toFixed(1) : parseFloat(value.toFixed(1)).toString();
  }
  // "whole"
  return Math.round(value).toString();
}

function getRecommendation(grinderId, roastLevel, roastDateStr, dose) {
  const grinder = GRINDERS.find(g => g.id === grinderId);
  if (!grinder) return null;

  const daysSinceRoast = getDaysSinceRoast(roastDateStr);

  // Step 1: Start at midpoint
  let normalized = 0.5;

  // Step 2: Roast level adjustment (biggest factor)
  const roastAdj = ROAST_OFFSETS[roastLevel] || 0;
  normalized += roastAdj;

  // Step 3: Freshness adjustment
  const freshnessAdj = getFreshnessAdjustment(daysSinceRoast);
  normalized += freshnessAdj;

  // Step 4: Dose adjustment (small effect)
  const doseAdj = (dose - 18) * 0.01;
  normalized += doseAdj;

  // Step 5: Clamp to valid range
  normalized = clamp(normalized, 0, 1);

  // Step 6: Convert to grinder-specific scale
  const range = grinder.espressoMax - grinder.espressoMin;
  const rawSetting = grinder.espressoMin + (normalized * range);
  const setting = roundToStep(rawSetting, grinder.stepSize);
  const clampedSetting = clamp(setting, grinder.espressoMin, grinder.espressoMax);

  // Step 7: Format for display
  const display = formatSetting(clampedSetting, grinder.displayFormat, grinder);

  // Build explanation
  const explanations = buildExplanations(roastLevel, roastAdj, daysSinceRoast, freshnessAdj, dose, doseAdj, grinder);

  return {
    setting: clampedSetting,
    display,
    grinder,
    normalized,
    daysSinceRoast,
    explanations
  };
}

function buildExplanations(roastLevel, roastAdj, days, freshnessAdj, dose, doseAdj, grinder) {
  const items = [];
  const roastLabels = {
    "light": "Light roast",
    "medium-light": "Medium-light roast",
    "medium": "Medium roast",
    "medium-dark": "Medium-dark roast",
    "dark": "Dark roast"
  };

  // Roast level explanation
  const roastName = roastLabels[roastLevel] || roastLevel;
  if (roastAdj < 0) {
    items.push(`${roastName} → finer grind (denser beans need more extraction)`);
  } else if (roastAdj > 0) {
    items.push(`${roastName} → coarser grind (porous beans extract easily)`);
  } else {
    items.push(`${roastName} → no adjustment needed`);
  }

  // Freshness explanation
  const freshnessLabel = getFreshnessLabel(days);
  if (freshnessAdj > 0) {
    items.push(`Beans are ${days} day${days !== 1 ? "s" : ""} old (${freshnessLabel}) → coarser to compensate for CO₂`);
  } else if (freshnessAdj < 0) {
    items.push(`Beans are ${days} day${days !== 1 ? "s" : ""} old (${freshnessLabel}) → finer to extract more flavor`);
  } else {
    items.push(`Beans are ${days} day${days !== 1 ? "s" : ""} old (${freshnessLabel}) → no adjustment needed`);
  }

  // Dose explanation
  if (Math.abs(dose - 18) < 0.25) {
    items.push(`${dose}g dose → standard, no adjustment`);
  } else if (dose > 18) {
    items.push(`${dose}g dose → slightly coarser (more coffee = more resistance)`);
  } else {
    items.push(`${dose}g dose → slightly finer (less coffee = less resistance)`);
  }

  return items;
}
