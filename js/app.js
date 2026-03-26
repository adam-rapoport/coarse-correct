/**
 * Wires up the form to the algorithm and renders results.
 */

document.addEventListener("DOMContentLoaded", function () {
  populateGrinderDropdown();
  setDefaultRoastDate();

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

  grinderEl.textContent = result.grinder.name;
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
