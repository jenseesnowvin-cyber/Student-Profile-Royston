// NAVBAR ACTIVE LINKS
const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// SMOOTH SCROLL FOR ANCHORS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// SIMPLE REVEAL EFFECT ON SCROLL
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// FORM HANDLER (simple alert for demo)
const form = document.querySelector("#contact form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    form.reset();
  });
}

// TYPING ANIMATION FOR HERO SECTION
const typingPhrases = [
  "Aspiring Genetisist",
  "Professional Goalkeeper",
  "Raised with Hustle,Loyalty and Respect",
  
];
const typingText = document.getElementById("typing-text");
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
  const currentPhrase = typingPhrases[typingIndex];
  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeAnimation, 1200); // Pause at end
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingPhrases.length;
      setTimeout(typeAnimation, 400); // Pause before typing next
      return;
    }
  }
  setTimeout(typeAnimation, isDeleting ? 50 : 100);
}

if (typingText) {
  setTimeout(typeAnimation, 1000);
}
