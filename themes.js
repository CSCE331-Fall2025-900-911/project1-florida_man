function switchCSS() {
  let stylesheet = document.getElementById("themeStylesheet");

  if (stylesheet.getAttribute("href") === "light.css") {
    stylesheet.setAttribute("href", "dark.css");
    localStorage.setItem("theme", "dark.css");
  } else {
    stylesheet.setAttribute("href", "light.css");
    localStorage.setItem("theme", "light.css");
  }
}

// Apply saved theme when page loads
window.onload = function() {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.getElementById("themeStylesheet").setAttribute("href", savedTheme);
  }
};
