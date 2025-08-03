// Optional: Control speed or toggle animation
const baseball = document.querySelector('.baseball');

// Example: Pause on click
baseball.addEventListener('click', () => {
  if (baseball.style.animationPlayState === 'paused') {
    baseball.style.animationPlayState = 'running';
  } else {
    baseball.style.animationPlayState = 'paused';
  }
});