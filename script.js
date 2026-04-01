// SAFE LOAD
window.onload = function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};

// TYPING
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

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("light");
  };
}
