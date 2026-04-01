// LOADER
window.onload = function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
};

// TYPING EFFECT
const typingEl = document.getElementById("typing");

if (typingEl) {
  const text = "Web Developer | Student";
  let i = 0;

  function typing() {
    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  typing();
}

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    if (card.getBoundingClientRect().top < trigger) {
      card.classList.add("show");
    }
  });
});

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  };
}
