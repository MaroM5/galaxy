// timer
const startTime = new Date('December 23, 2022 11:30:00 GMT+0200');
const counterEl = document.getElementById('timeCounter');

function updateCounter() {
  const now = new Date();
  const seconds = Math.floor((now - startTime) / 1000);
  counterEl.textContent = `Seconds: ${seconds}`;
}
updateCounter();
setInterval(updateCounter, 1000);

// scroll
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

// mute
const music = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');
const startBtn = document.getElementById('start-btn');

music.volume = 0.5; 

muteBtn.addEventListener('click', () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? '🔇' : '🔊';
});

//start button
startBtn.addEventListener('click', () => {
  music.play();
  startBtn.style.display = 'none'; 
});
