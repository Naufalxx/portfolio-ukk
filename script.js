// NAVBAR BLUR
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// FADE IN PROJECT
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});

// TYPING EFFECT
const text = "Web Developer | Student";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".hero p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

// kosongin dulu biar ga dobel
document.querySelector(".hero p").innerHTML = "";
typing();
