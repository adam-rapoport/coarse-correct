/**
 * Wires up the form to the algorithm and renders results.
 */

var selectedBean = null;
var highlightedIndex = -1;
var currentAdjustment = null;
var lastResult = null;
var selectedRating = 0;
var tempUnit = "F"; // "F" or "C" — user preference, persisted in localStorage

document.addEventListener("DOMContentLoaded", function () {
  loadTempUnitPreference();
  populateGrinderDropdown();
  setDefaultRoastDate();
  initBeanSearch();
  initBrewMethodToggle();
  initTempUnitToggle();
  initBrewLogForm();
  updateDoseInput(getSelectedMethod()); // build the dose control for the default method

  document.getElementById("grind-form").addEventListener("submit", function (e) {
    e.preventDefault();
    handleSubmit();
  });
});

function populateGrinderDropdown() {
  const select = document.getElementById("grinder");
  // Preserve current selection if possible
  const currentValue = select.value;
  // Clear all options except the placeholder
  while (select.options.length > 1) {
    select.remove(1);
  }
  // Sort alphabetically by name (case-insensitive) without mutating the source array
  const sortedGrinders = GRINDERS.slice().sort(function (a, b) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
  sortedGrinders.forEach(function (grinder) {
    const option = document.createElement("option");
    option.value = grinder.id;
    option.textContent = grinder.name;
    select.appendChild(option);
  });
  // Restore selection if the grinder is still in the list
  if (currentValue) {
    select.value = currentValue;
  }
}

function setDefaultRoastDate() {
  // Default to 7 days ago (common scenario)
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const dateStr = date.toISOString().split("T")[0];
  document.getElementById("roast-date").value = dateStr;

  // Don't allow future dates
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("roast-date").setAttribute("max", today);
}

// ── Brew method toggle ────────────────────────────────────────────────

function getSelectedMethod() {
  return document.querySelector('input[name="method"]:checked').value;
}

function initBrewMethodToggle() {
  var methodRadios = document.querySelectorAll('input[name="method"]');
  methodRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      updateDoseInput(getSelectedMethod());
    });
  });
}

function updateDoseInput(method) {
  var label = document.getElementById("dose-label");
  var wrapper = document.getElementById("dose-wrapper");
  var config = BREW_METHOD_CONFIG[method];

  // Refresh the temp input's min/max/placeholder/hint for the new method (and current unit)
  refreshTempInputAttrs();

  // Clear the wrapper
  wrapper.innerHTML = "";

  if (config.doseType === "ratio") {
    // Show a ratio dropdown
    label.textContent = "Brew Ratio";
    var select = document.createElement("select");
    select.id = "dose";
    select.required = true;

    var ratios = [14, 15, 16, 17, 18];
    ratios.forEach(function (r) {
      var option = document.createElement("option");
      option.value = r;
      option.textContent = "1:" + r;
      if (r === config.doseDefault) option.selected = true;
      select.appendChild(option);
    });

    wrapper.appendChild(select);
  } else {
    // Show a grams dropdown (iOS/iPadOS hide the +/- steppers on number inputs,
    // so a dropdown makes it clear the dose is selectable). 10g–22g in 0.5g steps.
    label.textContent = "Dose (grams)";
    var select = document.createElement("select");
    select.id = "dose";
    select.required = true;

    for (var g = 10; g <= 22; g += 0.5) {
      var grams = Math.round(g * 10) / 10; // avoid floating-point drift (e.g. 10.5, 11)
      var option = document.createElement("option");
      option.value = grams;
      option.textContent = grams + " g";
      if (grams === config.doseDefault) option.selected = true;
      select.appendChild(option);
    }

    wrapper.appendChild(select);
  }
}

// ── Temperature unit toggle (°F / °C) ─────────────────────────────────

function fToC(f) {
  return (f - 32) * 5 / 9;
}

function cToF(c) {
  return (c * 9 / 5) + 32;
}

function roundTemp(value) {
  // Display whole-degree precision for temperatures
  return Math.round(value);
}

function loadTempUnitPreference() {
  try {
    var stored = localStorage.getItem("coarseCorrect_tempUnit");
    if (stored === "C" || stored === "F") {
      tempUnit = stored;
    }
  } catch (e) {
    // localStorage may be unavailable (private browsing, etc.) — fall back to default
  }
}

function saveTempUnitPreference() {
  try {
    localStorage.setItem("coarseCorrect_tempUnit", tempUnit);
  } catch (e) {
    // Ignore write failures
  }
}

function updateTempHint(config) {
  var tempHint = document.getElementById("temp-hint");
  if (!tempHint) return;
  if (!config) {
    config = BREW_METHOD_CONFIG[getSelectedMethod()];
  }
  var defaultInDisplayUnit = tempUnit === "C" ? roundTemp(fToC(config.tempDefault)) : config.tempDefault;
  tempHint.textContent = "Default: " + defaultInDisplayUnit + "\u00B0" + tempUnit + " for " + config.label;
}

// Refresh min/max/placeholder/label to match current tempUnit + selected brew method.
// Does NOT touch the input's value.
function refreshTempInputAttrs() {
  var config = BREW_METHOD_CONFIG[getSelectedMethod()];
  var input = document.getElementById("water-temp");
  var unitLabel = document.getElementById("temp-unit-label");
  if (!input || !unitLabel) return;

  if (tempUnit === "C") {
    input.min = String(roundTemp(fToC(config.tempMin)));
    input.max = String(roundTemp(fToC(config.tempMax)));
    input.placeholder = String(roundTemp(fToC(config.tempDefault)));
    unitLabel.innerHTML = "&deg;C";
  } else {
    input.min = String(config.tempMin);
    input.max = String(config.tempMax);
    input.placeholder = String(config.tempDefault);
    unitLabel.innerHTML = "&deg;F";
  }
  updateTempHint(config);
}

function initTempUnitToggle() {
  var toggle = document.getElementById("temp-unit-toggle");
  if (!toggle) return;
  var buttons = toggle.querySelectorAll(".mode-btn");

  // Reflect the persisted preference in the UI on load
  buttons.forEach(function (btn) {
    if (btn.getAttribute("data-unit") === tempUnit) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  refreshTempInputAttrs();

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var newUnit = btn.getAttribute("data-unit");
      if (newUnit === tempUnit) return;

      var input = document.getElementById("water-temp");
      var previousValue = input.value;

      tempUnit = newUnit;
      saveTempUnitPreference();

      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      refreshTempInputAttrs();

      // Convert any existing user-entered value in place
      if (previousValue !== "") {
        var current = parseFloat(previousValue);
        if (!isNaN(current)) {
          var converted = tempUnit === "C" ? fToC(current) : cToF(current);
          input.value = String(roundTemp(converted));
        }
      }
    });
  });
}

// Replace Fahrenheit temperature strings in an explanation line with Celsius
// when the user is in °C mode. The algorithm always returns explanations in °F,
// so we post-process them here to keep unit concerns out of the math layer.
function localizeExplanationTemp(text) {
  if (tempUnit !== "C") return text;
  return text.replace(/(\d+(?:\.\d+)?)\u00B0F/g, function (match, numStr) {
    var f = parseFloat(numStr);
    return roundTemp(fToC(f)) + "\u00B0C";
  });
}

// ── Bean search ───────────────────────────────────────────────────────

function initBeanSearch() {
  var searchInput = document.getElementById("bean-search");
  var resultsContainer = document.getElementById("bean-results");
  var searchSection = document.getElementById("bean-search-section");
  var modeBtns = document.querySelectorAll(".bean-mode-toggle .mode-btn");

  // Toggle between search and manual mode
  modeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modeBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var mode = btn.getAttribute("data-mode");
      if (mode === "search") {
        searchSection.classList.remove("hidden");
        if (!selectedBean) {
          searchInput.focus();
        }
      } else {
        searchSection.classList.add("hidden");
        clearBeanSelection();
      }
    });
  });

  // Search on typing
  searchInput.addEventListener("input", function () {
    var query = searchInput.value;
    if (query.length < 2) {
      resultsContainer.classList.add("hidden");
      resultsContainer.innerHTML = "";
      highlightedIndex = -1;
      return;
    }

    var results = searchBeans(query);
    highlightedIndex = -1;
    renderBeanResults(results, resultsContainer);
  });

  // Keyboard navigation in results
  searchInput.addEventListener("keydown", function (e) {
    var items = resultsContainer.querySelectorAll(".bean-result-item");
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
      updateHighlight(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      highlightedIndex = Math.max(highlightedIndex - 1, 0);
      updateHighlight(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < items.length) {
        items[highlightedIndex].click();
      }
    } else if (e.key === "Escape") {
      resultsContainer.classList.add("hidden");
      highlightedIndex = -1;
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".bean-search-wrapper")) {
      resultsContainer.classList.add("hidden");
      highlightedIndex = -1;
    }
  });

  // Clear button
  document.getElementById("bean-clear").addEventListener("click", function () {
    clearBeanSelection();
  });
}

function renderBeanResults(results, container) {
  container.innerHTML = "";

  if (results.length === 0) {
    var empty = document.createElement("div");
    empty.className = "bean-result-item";
    empty.style.color = "#9A8A7C";
    empty.style.fontStyle = "italic";
    empty.textContent = "No beans found";
    container.appendChild(empty);
    container.classList.remove("hidden");
    return;
  }

  var roastLabels = {
    "light": "Light",
    "medium-light": "Med-Light",
    "medium": "Medium",
    "medium-dark": "Med-Dark",
    "dark": "Dark"
  };

  results.forEach(function (bean) {
    var item = document.createElement("div");
    item.className = "bean-result-item";

    var roasterSpan = document.createElement("span");
    roasterSpan.className = "bean-result-roaster";
    roasterSpan.textContent = bean.roaster;

    var nameSpan = document.createElement("span");
    nameSpan.className = "bean-result-name";
    nameSpan.textContent = bean.name;

    var meta = document.createElement("div");
    meta.className = "bean-result-meta";

    var levelBadge = document.createElement("span");
    levelBadge.className = "bean-result-level";
    levelBadge.textContent = roastLabels[bean.roastLevel] || bean.roastLevel;

    var notesSpan = document.createElement("span");
    notesSpan.className = "bean-result-notes";
    notesSpan.textContent = bean.notes;

    meta.appendChild(levelBadge);
    meta.appendChild(notesSpan);

    item.appendChild(roasterSpan);
    item.appendChild(nameSpan);
    item.appendChild(meta);

    item.addEventListener("click", function () {
      selectBean(bean);
    });

    container.appendChild(item);
  });

  container.classList.remove("hidden");
}

function updateHighlight(items) {
  items.forEach(function (item, i) {
    if (i === highlightedIndex) {
      item.classList.add("highlighted");
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("highlighted");
    }
  });
}

function selectBean(bean) {
  selectedBean = bean;

  var roastLabels = {
    "light": "Light",
    "medium-light": "Med-Light",
    "medium": "Medium",
    "medium-dark": "Med-Dark",
    "dark": "Dark"
  };

  // Show selected chip
  document.getElementById("bean-selected-name").textContent = bean.roaster + " — " + bean.name;
  document.getElementById("bean-selected-roast").textContent = roastLabels[bean.roastLevel] || bean.roastLevel;
  document.getElementById("bean-selected").classList.remove("hidden");

  // Hide search input and results
  document.getElementById("bean-search").value = "";
  document.getElementById("bean-results").classList.add("hidden");
  document.getElementById("bean-search").style.display = "none";
  highlightedIndex = -1;

  // Auto-fill roast level
  var radio = document.querySelector('input[name="roast"][value="' + bean.roastLevel + '"]');
  if (radio) radio.checked = true;

  // Dim the roast radio group
  document.getElementById("roast-radio-group").classList.add("dimmed");
  document.getElementById("roast-auto-label").classList.remove("hidden");
}

function clearBeanSelection() {
  selectedBean = null;

  // Hide selected chip, show search input
  document.getElementById("bean-selected").classList.add("hidden");
  document.getElementById("bean-search").style.display = "";
  document.getElementById("bean-search").value = "";
  document.getElementById("bean-results").classList.add("hidden");
  highlightedIndex = -1;

  // Re-enable roast radio group
  document.getElementById("roast-radio-group").classList.remove("dimmed");
  document.getElementById("roast-auto-label").classList.add("hidden");
}

// ── Form submission ───────────────────────────────────────────────────

function handleSubmit() {
  const grinderId = document.getElementById("grinder").value;
  const brewMethod = getSelectedMethod();
  const roastLevel = document.querySelector('input[name="roast"]:checked').value;
  const roastDate = document.getElementById("roast-date").value;
  const config = BREW_METHOD_CONFIG[brewMethod];
  const doseEl = document.getElementById("dose");

  // Validation
  if (!grinderId) {
    showError("Please select your grinder.");
    return;
  }
  if (!roastDate) {
    showError("Please enter the roast date.");
    return;
  }

  var doseOrRatio;
  if (config.doseType === "ratio") {
    doseOrRatio = parseInt(doseEl.value);
  } else {
    doseOrRatio = parseFloat(doseEl.value);
    if (isNaN(doseOrRatio) || doseOrRatio < 10 || doseOrRatio > 30) {
      showError("Please enter a dose between 10g and 30g.");
      return;
    }
  }

  var waterTempEl = document.getElementById("water-temp");
  var waterTemp = null;
  if (waterTempEl.value) {
    var rawTemp = parseFloat(waterTempEl.value);
    // Algorithm expects Fahrenheit — convert from Celsius input if needed
    waterTemp = tempUnit === "C" ? cToF(rawTemp) : rawTemp;
  }

  const result = getRecommendation(grinderId, brewMethod, roastLevel, roastDate, doseOrRatio, waterTemp);

  if (!result) {
    showError("Something went wrong. Please try again.");
    return;
  }

  // Handle unsupported grinder/method combo
  if (result.error) {
    showError(result.message);
    return;
  }

  renderResult(result);
}

// ── Result rendering ──────────────────────────────────────────────────

function renderResult(result) {
  lastResult = result;

  // Hide any previous log form
  document.getElementById("brew-log-form").classList.add("hidden");

  const resultSection = document.getElementById("result");
  const methodEl = document.getElementById("result-method");
  const grinderEl = document.getElementById("result-grinder");
  const settingEl = document.getElementById("result-setting");
  const explanationEl = document.getElementById("result-explanation");

  // Method badge
  methodEl.textContent = result.methodLabel;

  // Grinder name (with bean info if selected)
  if (selectedBean) {
    grinderEl.textContent = selectedBean.roaster + " " + selectedBean.name + " on " + result.grinder.name;
  } else {
    grinderEl.textContent = result.grinder.name;
  }
  settingEl.textContent = result.display;

  // Build explanation list (localize any embedded temperatures to user's unit preference)
  explanationEl.innerHTML = "";
  result.explanations.forEach(function (text) {
    const li = document.createElement("li");
    li.textContent = localizeExplanationTemp(text);
    explanationEl.appendChild(li);
  });

  // Show grinder-specific note
  const existingNote = resultSection.querySelector(".grinder-note");
  if (existingNote) existingNote.remove();

  if (result.grinder.notes) {
    const note = document.createElement("p");
    note.className = "grinder-note";
    note.textContent = "\uD83D\uDCA1 " + result.grinder.notes;
    resultSection.querySelector(".result-card").appendChild(note);
  }

  // Reveal the result section
  resultSection.classList.remove("hidden");

  // Show quick-adjust buttons
  showQuickAdjust(result);

  // Smooth scroll to result
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Quick-adjust dial-in loop ────────────────────────────────────────

function showQuickAdjust(result) {
  currentAdjustment = {
    originalSetting: result.setting,
    originalDisplay: result.display,
    currentSetting: result.setting,
    currentDisplay: result.display,
    adjustmentCount: 0,
    grinder: result.grinder,
    brewMethod: result.brewMethod
  };

  var section = document.getElementById("quick-adjust");
  section.classList.remove("hidden");
  document.getElementById("adjust-status").classList.add("hidden");
  document.getElementById("adjust-limit").classList.add("hidden");

  document.getElementById("btn-sour").onclick = function () {
    handleQuickAdjust("finer");
  };
  document.getElementById("btn-bitter").onclick = function () {
    handleQuickAdjust("coarser");
  };
  document.getElementById("btn-right").onclick = function () {
    handleJustRight();
  };
}

function handleQuickAdjust(direction) {
  if (!currentAdjustment) return;

  var adjusted = getAdjustedSetting(
    currentAdjustment.currentSetting,
    direction,
    currentAdjustment.grinder,
    currentAdjustment.brewMethod
  );

  if (!adjusted) return;

  currentAdjustment.currentSetting = adjusted.setting;
  currentAdjustment.currentDisplay = adjusted.display;
  currentAdjustment.adjustmentCount++;

  // Update the main result display
  document.getElementById("result-setting").textContent = adjusted.display;
  document.getElementById("result-tagline").textContent =
    "Adjustment " + currentAdjustment.adjustmentCount + " — " + adjusted.explanation.toLowerCase();

  // Show status
  var status = document.getElementById("adjust-status");
  status.textContent = "Try " + adjusted.display + " — " + adjusted.explanation.toLowerCase();
  status.classList.remove("hidden");

  // Show limit warning if needed
  var limitEl = document.getElementById("adjust-limit");
  if (adjusted.atLimit) {
    var boundaryWord = direction === "finer" ? "finest" : "coarsest";
    limitEl.textContent = "You've reached the " + boundaryWord + " setting for " +
      BREW_METHOD_CONFIG[currentAdjustment.brewMethod].label + " on this grinder.";
    limitEl.classList.remove("hidden");
  } else {
    limitEl.classList.add("hidden");
  }
}

function handleJustRight() {
  showBrewLogForm("just_right");
}

function showBrewLogForm(outcome) {
  // Hide the quick-adjust buttons
  document.getElementById("quick-adjust").classList.add("hidden");
  document.getElementById("result-tagline").textContent = "Dialed in!";

  // Build summary text
  var summary = "";
  if (lastResult) {
    var methodLabel = BREW_METHOD_CONFIG[lastResult.brewMethod].label;
    summary = methodLabel + " on " + lastResult.grinder.name;
    if (selectedBean) {
      summary += " with " + selectedBean.roaster + " " + selectedBean.name;
    }
    var finalDisplay = currentAdjustment ? currentAdjustment.currentDisplay : lastResult.display;
    summary += " — Setting: " + finalDisplay;
  }
  document.getElementById("log-summary").textContent = summary;

  // Reset form fields
  document.getElementById("taste-notes").value = "";
  selectedRating = 0;
  updateStarDisplay();

  // Show the form
  var form = document.getElementById("brew-log-form");
  form.classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "start" });

  // Store outcome for save
  form.dataset.outcome = outcome || "just_right";
}

function initBrewLogForm() {
  // Star rating clicks
  var stars = document.querySelectorAll("#star-rating .star");
  stars.forEach(function (star) {
    star.addEventListener("click", function () {
      selectedRating = parseInt(star.dataset.value);
      updateStarDisplay();
    });
  });

  // Save button
  document.getElementById("save-brew-btn").addEventListener("click", function () {
    saveBrew();
  });

  // Log without adjusting link
  document.getElementById("log-without-adjust").addEventListener("click", function (e) {
    e.preventDefault();
    showBrewLogForm(null);
  });
}

function updateStarDisplay() {
  var stars = document.querySelectorAll("#star-rating .star");
  stars.forEach(function (star) {
    var val = parseInt(star.dataset.value);
    if (val <= selectedRating) {
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  });
}

function saveBrew() {
  if (!lastResult) return;

  var finalSetting = currentAdjustment ? currentAdjustment.currentSetting : lastResult.setting;
  var finalDisplay = currentAdjustment ? currentAdjustment.currentDisplay : lastResult.display;
  var adjustmentCount = currentAdjustment ? currentAdjustment.adjustmentCount : 0;
  var outcome = document.getElementById("brew-log-form").dataset.outcome || null;

  var entry = {
    id: "brew_" + Date.now(),
    timestamp: new Date().toISOString(),
    grinderId: lastResult.grinder.id,
    grinderName: lastResult.grinder.name,
    brewMethod: lastResult.brewMethod,
    beanId: selectedBean ? selectedBean.id : null,
    beanRoaster: selectedBean ? selectedBean.roaster : null,
    beanName: selectedBean ? selectedBean.name : null,
    roastLevel: document.querySelector('input[name="roast"]:checked').value,
    roastDate: document.getElementById("roast-date").value,
    doseOrRatio: parseFloat(document.getElementById("dose").value),
    waterTemp: (function () {
      var v = document.getElementById("water-temp").value;
      if (!v) return null;
      var n = parseFloat(v);
      if (isNaN(n)) return null;
      // Canonicalize to Fahrenheit for the brew log so the journal stays consistent
      return tempUnit === "C" ? cToF(n) : n;
    })(),
    originalSetting: lastResult.setting,
    originalDisplay: lastResult.display,
    finalSetting: finalSetting,
    finalDisplay: finalDisplay,
    adjustmentCount: adjustmentCount,
    outcome: outcome,
    tasteNotes: document.getElementById("taste-notes").value.trim() || null,
    rating: selectedRating || null
  };

  saveBrewEntry(entry);

  // Hide log form, show toast
  document.getElementById("brew-log-form").classList.add("hidden");
  currentAdjustment = null;
  showToast("Saved to journal!");
}

function showToast(message) {
  var existing = document.querySelector(".toast");
  if (existing) existing.remove();

  var toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(function () {
    toast.classList.add("toast-fade");
  }, 2000);
  setTimeout(function () {
    if (toast.parentNode) toast.remove();
  }, 2500);
}

function showError(message) {
  // Remove any existing error
  const existing = document.querySelector(".error-message");
  if (existing) existing.remove();

  const error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;
  error.setAttribute("role", "alert");

  const form = document.getElementById("grind-form");
  form.insertBefore(error, document.getElementById("submit-btn"));

  // Auto-remove after 4 seconds
  setTimeout(function () {
    if (error.parentNode) error.remove();
  }, 4000);
}
