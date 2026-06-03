/**
 * Brew journal page — renders, filters, sorts, and deletes brew log entries.
 */

var currentFilter = "all";
var currentSort = "newest";

var METHOD_LABELS = {
  espresso: "Espresso",
  v60: "V60",
  chemex: "Chemex",
  frenchPress: "French Press"
};

document.addEventListener("DOMContentLoaded", function () {
  renderJournal();

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderJournal();
    });
  });

  // Sort dropdown
  document.getElementById("sort-select").addEventListener("change", function () {
    currentSort = this.value;
    renderJournal();
  });

  // Clear all
  document.getElementById("clear-all-btn").addEventListener("click", function () {
    document.getElementById("confirm-clear").classList.remove("hidden");
  });

  document.getElementById("confirm-yes").addEventListener("click", function () {
    clearBrewLog();
    document.getElementById("confirm-clear").classList.add("hidden");
    renderJournal();
  });

  document.getElementById("confirm-no").addEventListener("click", function () {
    document.getElementById("confirm-clear").classList.add("hidden");
  });
});

function renderJournal() {
  var log = getBrewLog();
  var list = document.getElementById("journal-list");
  var emptyEl = document.getElementById("journal-empty");
  var clearBtn = document.getElementById("clear-all-btn");

  // Filter
  var filtered = log;
  if (currentFilter !== "all") {
    filtered = log.filter(function (entry) {
      return entry.brewMethod === currentFilter;
    });
  }

  // Sort
  filtered.sort(function (a, b) {
    var dateA = new Date(a.timestamp);
    var dateB = new Date(b.timestamp);
    return currentSort === "newest" ? dateB - dateA : dateA - dateB;
  });

  // Clear list
  list.innerHTML = "";

  if (filtered.length === 0) {
    emptyEl.classList.remove("hidden");
    clearBtn.classList.add("hidden");
    if (log.length === 0) {
      emptyEl.querySelector("p").textContent = "No brews logged yet.";
    } else {
      emptyEl.querySelector("p").textContent = "No " + (METHOD_LABELS[currentFilter] || "") + " brews logged.";
    }
    return;
  }

  emptyEl.classList.add("hidden");
  clearBtn.classList.remove("hidden");

  filtered.forEach(function (entry) {
    var card = document.createElement("div");
    card.className = "journal-card";

    // Date and method
    var header = document.createElement("div");
    header.className = "journal-card-header";

    var dateSpan = document.createElement("span");
    dateSpan.className = "journal-date";
    dateSpan.textContent = formatDate(entry.timestamp);

    var methodBadge = document.createElement("span");
    methodBadge.className = "journal-method";
    methodBadge.textContent = METHOD_LABELS[entry.brewMethod] || entry.brewMethod;

    header.appendChild(dateSpan);
    header.appendChild(methodBadge);

    // Bean and grinder
    var details = document.createElement("div");
    details.className = "journal-card-details";

    var beanLine = "";
    if (entry.beanRoaster && entry.beanName) {
      beanLine = entry.beanRoaster + " " + entry.beanName;
    } else {
      var roastLabels = { "light": "Light", "medium-light": "Med-Light", "medium": "Medium", "medium-dark": "Med-Dark", "dark": "Dark" };
      beanLine = (roastLabels[entry.roastLevel] || entry.roastLevel) + " roast";
    }

    var beanEl = document.createElement("p");
    beanEl.className = "journal-bean";
    beanEl.textContent = beanLine + " on " + entry.grinderName;
    details.appendChild(beanEl);

    // Setting line
    var settingEl = document.createElement("p");
    settingEl.className = "journal-setting";
    var settingText = "Setting: " + entry.finalDisplay;
    if (entry.adjustmentCount > 0) {
      settingText += " (started at " + entry.originalDisplay + ", " + entry.adjustmentCount + " adjustment" + (entry.adjustmentCount !== 1 ? "s" : "") + ")";
    }
    settingEl.textContent = settingText;
    details.appendChild(settingEl);

    // Rating
    if (entry.rating) {
      var ratingEl = document.createElement("p");
      ratingEl.className = "journal-rating";
      var starsText = "";
      for (var i = 0; i < 5; i++) {
        starsText += i < entry.rating ? "\u2605" : "\u2606";
      }
      ratingEl.textContent = starsText;
      details.appendChild(ratingEl);
    }

    // Taste notes
    if (entry.tasteNotes) {
      var notesEl = document.createElement("p");
      notesEl.className = "journal-notes";
      notesEl.textContent = "\u201C" + entry.tasteNotes + "\u201D";
      details.appendChild(notesEl);
    }

    // Delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "journal-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteBrewEntry(entry.id);
      renderJournal();
    });

    card.appendChild(header);
    card.appendChild(details);
    card.appendChild(deleteBtn);
    list.appendChild(card);
  });
}

function formatDate(isoStr) {
  var d = new Date(isoStr);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
