// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// NAVBAR SCROLL
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// TYPING
const text = "Web Developer | Student";
let i = 0;
const typingEl = document.getElementById("typing");

function typing() {
  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();

// SCROLL CARD
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < trigger) {
      card.classList.add("show");
    }
  });
});

// ACTIVE NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 100) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// THEME
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};
