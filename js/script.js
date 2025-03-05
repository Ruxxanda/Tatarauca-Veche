const currentYear = new Date().getFullYear();

document.querySelectorAll('.anul').forEach(function(element) {
  element.textContent = currentYear;
});










document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.2 }); // Se activează când 20% din secțiune e vizibilă

  sections.forEach(section => observer.observe(section));
});
