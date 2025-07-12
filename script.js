// Show back-to-top button on scroll
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-to-top');
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Scroll smoothly to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optional: Highlight active nav link based on scroll position
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 80) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

// Simple form validation
function validateForm(event) {
  const form = event.target;
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill all required fields.");
      input.focus();
      event.preventDefault();
      return false;
    }
  }
  return true;
}

// Attach form validation to all forms
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", validateForm);
  });
});

// Optional: Dark Mode Toggle (Bonus Feature)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
