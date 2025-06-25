// Lock page scroll at start
document.body.classList.add("lock-scroll");

const scrollBox = document.getElementById("scrollText");
const paragraphs = scrollBox.querySelectorAll(".fade-paragraph");

// Redirect scroll from anywhere into the text box
function redirectScrollToText(e) {
  const delta = e.deltaY || e.wheelDelta || -e.detail || 0;
  scrollBox.scrollTop += delta;
  e.preventDefault();
}

// Prevent scrolling on rest of the page
window.addEventListener("wheel", redirectScrollToText, { passive: false });
window.addEventListener("touchmove", function (e) {
  if (!scrollBox.contains(e.target)) {
    e.preventDefault();
  }
}, { passive: false });

// Animate and unlock on scroll
scrollBox.addEventListener("scroll", () => {
  const atBottom = Math.ceil(scrollBox.scrollTop + scrollBox.clientHeight) >= scrollBox.scrollHeight;
  if (atBottom) {
    document.body.classList.remove("lock-scroll");
    window.removeEventListener("wheel", redirectScrollToText);
    window.removeEventListener("touchmove", redirectScrollToText);
  }

  paragraphs.forEach(p => {
    const rect = p.getBoundingClientRect();
    const containerTop = scrollBox.getBoundingClientRect().top;
    const isVisible = rect.top < containerTop + scrollBox.clientHeight - 50;
    if (isVisible) {
      p.classList.add("visible");
    }
  });
});

// Move this OUTSIDE the scroll listener
document.addEventListener("DOMContentLoaded", () => {
  const heartButtons = document.querySelectorAll(".heart-btn");

  heartButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
    });
  });
});

