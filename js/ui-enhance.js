/**
 * Visual-refresh enhancements layered on top of the existing app.
 * Purely additive — does not touch any existing form/algorithm logic.
 *   1. Dark / light theme toggle (persisted, respects OS preference).
 *   2. A subtle "pop" when the big grind number changes.
 */
(function () {
  var STORAGE_KEY = "coarseCorrect_theme";

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function storedTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#171110" : "#D5431A");
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  function setTheme(theme) {
    applyTheme(theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Reflect the theme set pre-paint (keeps the button label/meta in sync).
    applyTheme(currentTheme());

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        setTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    }

    // If the user hasn't chosen explicitly, keep following the OS preference live.
    if (!storedTheme() && window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (e) {
        if (!storedTheme()) applyTheme(e.matches ? "dark" : "light");
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }

    // Re-pop the big number whenever its text changes (initial reveal + dial-in).
    var setting = document.getElementById("result-setting");
    if (setting && "MutationObserver" in window) {
      var mo = new MutationObserver(function () {
        setting.classList.remove("pop");
        // force reflow so the animation can restart
        void setting.offsetWidth;
        setting.classList.add("pop");
      });
      mo.observe(setting, { childList: true, characterData: true, subtree: true });
    }
  });
})();
