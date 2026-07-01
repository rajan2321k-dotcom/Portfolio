// Smooth scroll for navigation (future expansion)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example interactive effect: highlight skills on hover
const skills = document.querySelectorAll(".skills-grid span");
skills.forEach(skill => {
  skill.addEventListener("mouseover", () => {
    skill.style.backgroundColor = "#d4af37";
    skill.style.color = "#000";
  });
  skill.addEventListener("mouseout", () => {
    skill.style.backgroundColor = "#1a1a1a";
    skill.style.color = "#f5f5f5";
  });
});
