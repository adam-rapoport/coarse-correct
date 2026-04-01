/**
 * localStorage CRUD for brew log entries.
 */

var STORAGE_KEY = "coarseCorrect_brewLog";

function getBrewLog() {
  try {
    var data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveBrewEntry(entry) {
  var log = getBrewLog();
  log.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
}

function deleteBrewEntry(id) {
  var log = getBrewLog();
  var filtered = log.filter(function (entry) {
    return entry.id !== id;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

function clearBrewLog() {
  localStorage.removeItem(STORAGE_KEY);
}
