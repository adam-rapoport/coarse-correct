/**
 * Core recommendation algorithm.
 * All math uses a normalized 0–1 scale (0 = finest, 1 = coarsest setting for the selected method).
 * Converts to grinder-specific numbers at the end.
 */

const BREW_METHOD_CONFIG = {
  espresso: {
    label: "Espresso",
    roastOffsets: {
      "light": -0.20,
      "medium-light": -0.10,
      "medium": 0.00,
      "medium-dark": 0.10,
      "dark": 0.20
    },
    doseType: "grams",
    doseDefault: 18,
    doseAdjBase: 18,
    doseAdjFactor: 0.01,
    freshnessMultiplier: 1.0,
    stepMultiplier: 1,
    tempDefault: 200,
    tempMin: 190,
    tempMax: 210,
    tempAdjFactor: 0.008
  },
  v60: {
    label: "V60 Pour-Over",
    roastOffsets: {
      "light": -0.15,
      "medium-light": -0.07,
      "medium": 0.00,
      "medium-dark": 0.07,
      "dark": 0.15
    },
    doseType: "ratio",
    doseDefault: 16,
    doseAdjBase: 16,
    doseAdjFactor: -0.02,
    freshnessMultiplier: 0.6,
    stepMultiplier: 2,
    tempDefault: 205,
    tempMin: 195,
    tempMax: 212,
    tempAdjFactor: 0.006
  },
  chemex: {
    label: "Chemex Pour-Over",
    roastOffsets: {
      "light": -0.15,
      "medium-light": -0.07,
      "medium": 0.00,
      "medium-dark": 0.07,
      "dark": 0.15
    },
    doseType: "ratio",
    doseDefault: 15,
    doseAdjBase: 15,
    doseAdjFactor: -0.02,
    freshnessMultiplier: 0.5,
    stepMultiplier: 2,
    tempDefault: 205,
    tempMin: 195,
    tempMax: 212,
    tempAdjFactor: 0.006
  }
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

function formatSetting(value, displayFormat, grinder, brewMethod) {
  // Sette 270 macro-micro only makes sense for espresso range (settings under 10)
  if (displayFormat === "macro-micro" && value < 10) {
    const macro = Math.floor(value);
    const microLetters = ["A", "B", "C", "D", "E", "F"];
    const microIndex = Math.round((value - macro) * 5);
    const letter = microLetters[clamp(microIndex, 0, 5)];
    return macro + letter;
  }
  if (displayFormat === "macro-micro") {
    // Fall back to whole number for pour-over settings above 9
    return Math.round(value).toString();
  }
  if (displayFormat === "decimal") {
    return value % 1 === 0 ? value.toFixed(1) : parseFloat(value.toFixed(1)).toString();
  }
  // "whole"
  return Math.round(value).toString();
}

function getRecommendation(grinderId, brewMethod, roastLevel, roastDateStr, doseOrRatio, waterTemp) {
  const grinder = GRINDERS.find(g => g.id === grinderId);
  if (!grinder) return null;

  const config = BREW_METHOD_CONFIG[brewMethod];
  if (!config) return null;

  // Check if this grinder supports the selected brew method
  const methodRange = grinder.methods[brewMethod];
  if (!methodRange) {
    return {
      error: true,
      message: grinder.name + " doesn't support " + config.label + ". Try selecting a different grinder."
    };
  }

  const daysSinceRoast = getDaysSinceRoast(roastDateStr);

  // Step 1: Start at midpoint
  let normalized = 0.5;

  // Step 2: Roast level adjustment (biggest factor)
  const roastAdj = config.roastOffsets[roastLevel] || 0;
  normalized += roastAdj;

  // Step 3: Freshness adjustment (scaled by method)
  const rawFreshnessAdj = getFreshnessAdjustment(daysSinceRoast);
  const freshnessAdj = rawFreshnessAdj * config.freshnessMultiplier;
  normalized += freshnessAdj;

  // Step 4: Dose or ratio adjustment
  const doseAdj = (doseOrRatio - config.doseAdjBase) * config.doseAdjFactor;
  normalized += doseAdj;

  // Step 4.5: Water temperature adjustment
  var tempAdj = 0;
  if (waterTemp != null) {
    var tempDeviation = waterTemp - config.tempDefault;
    tempAdj = tempDeviation * config.tempAdjFactor;
    normalized += tempAdj;
  }

  // Step 5: Clamp to valid range
  normalized = clamp(normalized, 0, 1);

  // Step 6: Convert to grinder-specific scale
  const range = methodRange.max - methodRange.min;
  const rawSetting = methodRange.min + (normalized * range);
  const setting = roundToStep(rawSetting, grinder.stepSize);
  const clampedSetting = clamp(setting, methodRange.min, methodRange.max);

  // Step 7: Format for display
  const display = formatSetting(clampedSetting, grinder.displayFormat, grinder, brewMethod);

  // Build explanation
  const explanations = buildExplanations(brewMethod, config, roastLevel, roastAdj, daysSinceRoast, freshnessAdj, doseOrRatio, doseAdj, grinder, waterTemp, tempAdj);

  return {
    setting: clampedSetting,
    display,
    grinder,
    brewMethod,
    methodLabel: config.label,
    normalized,
    daysSinceRoast,
    explanations
  };
}

function buildExplanations(brewMethod, config, roastLevel, roastAdj, days, freshnessAdj, doseOrRatio, doseAdj, grinder, waterTemp, tempAdj) {
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
    items.push(roastName + " \u2192 finer grind (denser beans need more extraction)");
  } else if (roastAdj > 0) {
    items.push(roastName + " \u2192 coarser grind (porous beans extract easily)");
  } else {
    items.push(roastName + " \u2192 no adjustment needed");
  }

  // Freshness explanation
  const freshnessLabel = getFreshnessLabel(days);
  const dayWord = days !== 1 ? "s" : "";
  if (freshnessAdj > 0) {
    items.push("Beans are " + days + " day" + dayWord + " old (" + freshnessLabel + ") \u2192 coarser to compensate for CO\u2082");
  } else if (freshnessAdj < 0) {
    items.push("Beans are " + days + " day" + dayWord + " old (" + freshnessLabel + ") \u2192 finer to extract more flavor");
  } else {
    items.push("Beans are " + days + " day" + dayWord + " old (" + freshnessLabel + ") \u2192 no adjustment needed");
  }

  // Dose / ratio explanation
  if (config.doseType === "ratio") {
    const ratioStr = "1:" + doseOrRatio + " ratio";
    if (Math.abs(doseOrRatio - config.doseAdjBase) < 0.25) {
      items.push(ratioStr + " \u2192 standard, no adjustment");
    } else if (doseOrRatio > config.doseAdjBase) {
      items.push(ratioStr + " \u2192 slightly finer (more water means faster flow)");
    } else {
      items.push(ratioStr + " \u2192 slightly coarser (less water means slower flow)");
    }
  } else {
    if (Math.abs(doseOrRatio - 18) < 0.25) {
      items.push(doseOrRatio + "g dose \u2192 standard, no adjustment");
    } else if (doseOrRatio > 18) {
      items.push(doseOrRatio + "g dose \u2192 slightly coarser (more coffee = more resistance)");
    } else {
      items.push(doseOrRatio + "g dose \u2192 slightly finer (less coffee = less resistance)");
    }
  }

  // Water temperature explanation
  if (waterTemp != null) {
    var tempDiff = waterTemp - config.tempDefault;
    if (Math.abs(tempDiff) < 2) {
      items.push(waterTemp + "\u00B0F water \u2192 standard temp, no adjustment");
    } else if (tempDiff > 0) {
      items.push(waterTemp + "\u00B0F water \u2192 hotter than standard, grinding slightly coarser");
    } else {
      items.push(waterTemp + "\u00B0F water \u2192 cooler than standard, grinding slightly finer");
    }
  }

  return items;
}

function getAdjustedSetting(currentSetting, direction, grinder, brewMethod) {
  var config = BREW_METHOD_CONFIG[brewMethod];
  if (!config) return null;

  var methodRange = grinder.methods[brewMethod];
  if (!methodRange) return null;

  var stepAmount = grinder.stepSize * config.stepMultiplier;

  // Ensure the step is large enough to produce a visible change in the display
  if (grinder.displayFormat === "whole" && stepAmount < 1) {
    stepAmount = 1;
  }

  var newSetting;
  if (direction === "finer") {
    newSetting = currentSetting - stepAmount;
  } else {
    newSetting = currentSetting + stepAmount;
  }

  newSetting = roundToStep(newSetting, grinder.stepSize);
  var atLimit = false;

  if (newSetting <= methodRange.min) {
    newSetting = methodRange.min;
    atLimit = true;
  } else if (newSetting >= methodRange.max) {
    newSetting = methodRange.max;
    atLimit = true;
  }

  var display = formatSetting(newSetting, grinder.displayFormat, grinder, brewMethod);

  var explanation;
  if (direction === "finer") {
    explanation = "Grinding finer to increase extraction and reduce sourness";
  } else {
    explanation = "Grinding coarser to reduce extraction and cut bitterness";
  }

  return {
    setting: newSetting,
    display: display,
    atLimit: atLimit,
    explanation: explanation
  };
}
