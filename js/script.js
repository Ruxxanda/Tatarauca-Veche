const currentYear = new Date().getFullYear();

document.querySelectorAll('.anul').forEach(function(element) {
  element.textContent = currentYear;
});
