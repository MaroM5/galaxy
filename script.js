// === TIME COUNTER ===
const startTime = new Date('December 23, 2022 11:30:00 GMT+0200');
const counterEl = document.getElementById('timeCounter');

function updateCounter() {
  const now = new Date();
  const seconds = Math.floor((now - startTime) / 1000);
  counterEl.textContent = `Seconds since Dec 23, 2022 11:30 (GR): ${seconds}`;
}
updateCounter();
setInterval(updateCounter, 1000);

// === FADE-IN SCROLL EFFECT ===
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
});
