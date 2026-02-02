const themeToggle = document.getElementById("theme-toggle");

function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
  localStorage.setItem("selected-theme", themeName);
}

function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setInitialTheme() {
  const savedTheme = localStorage.getItem("selected-theme");
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && preferDarkMode)) {
    if (themeToggle) themeToggle.checked = true;
    setTheme("dark");
  } else {
    if (themeToggle) themeToggle.checked = false;
    setTheme("light");
  }
}
function init() {
  if (themeToggle) {
    setInitialTheme();
    themeToggle.addEventListener("change", toggleTheme);
  }
}
document.addEventListener("DOMContentLoaded", init);
