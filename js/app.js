/**
 * Wires up the form to the algorithm and renders results.
 */

var selectedBean = null;
var highlightedIndex = -1;

document.addEventListener("DOMContentLoaded", function () {
  populateGrinderDropdown();
  setDefaultRoastDate();
  initBeanSearch();

  document.getElementById("grind-form").addEventListener("submit", function (e) {
    e.preventDefault();
    handleSubmit();
  });
});

function populateGrinderDropdown() {
  const select = document.getElementById("grinder");
  GRINDERS.forEach(function (grinder) {
    const option = document.createElement("option");
    option.value = grinder.id;
    option.textContent = grinder.name;
    select.appendChild(option);
  });
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

function initBeanSearch() {
  var searchInput = document.getElementById("bean-search");
  var resultsContainer = document.getElementById("bean-results");
  var searchSection = document.getElementById("bean-search-section");
  var modeBtns = document.querySelectorAll(".mode-btn");

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

function handleSubmit() {
  const grinderId = document.getElementById("grinder").value;
  const roastLevel = document.querySelector('input[name="roast"]:checked').value;
  const roastDate = document.getElementById("roast-date").value;
  const dose = parseFloat(document.getElementById("dose").value);

  // Validation
  if (!grinderId) {
    showError("Please select your grinder.");
    return;
  }
  if (!roastDate) {
    showError("Please enter the roast date.");
    return;
  }
  if (isNaN(dose) || dose < 10 || dose > 25) {
    showError("Please enter a dose between 10g and 25g.");
    return;
  }

  const result = getRecommendation(grinderId, roastLevel, roastDate, dose);
  if (!result) {
    showError("Something went wrong. Please try again.");
    return;
  }

  renderResult(result);
}

function renderResult(result) {
  const resultSection = document.getElementById("result");
  const grinderEl = document.getElementById("result-grinder");
  const settingEl = document.getElementById("result-setting");
  const explanationEl = document.getElementById("result-explanation");

  if (selectedBean) {
    grinderEl.textContent = selectedBean.roaster + " " + selectedBean.name + " on " + result.grinder.name;
  } else {
    grinderEl.textContent = result.grinder.name;
  }
  settingEl.textContent = result.display;

  // Build explanation list
  explanationEl.innerHTML = "";
  result.explanations.forEach(function (text) {
    const li = document.createElement("li");
    li.textContent = text;
    explanationEl.appendChild(li);
  });

  // Show grinder-specific note
  const existingNote = resultSection.querySelector(".grinder-note");
  if (existingNote) existingNote.remove();

  if (result.grinder.notes) {
    const note = document.createElement("p");
    note.className = "grinder-note";
    note.textContent = "💡 " + result.grinder.notes;
    resultSection.querySelector(".result-card").appendChild(note);
  }

  // Reveal the result section
  resultSection.classList.remove("hidden");

  // Smooth scroll to result
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
