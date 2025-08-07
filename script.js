const cat = document.getElementById('cat');
const gameArea = document.getElementById('game-area');
let score = 0;

function moveCat() {
  const maxX = gameArea.clientWidth - cat.clientWidth;
  const maxY = gameArea.clientHeight - cat.clientHeight;
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  cat.style.left = `${randX}px`;
  cat.style.top = `${randY}px`;
}

cat.addEventListener('click', () => {
  score++;
  alert(`Caught! Score: ${score}`);
  moveCat();
});

// Move the cat every 2 seconds
setInterval(moveCat, 2000);

moveCat(); // Initial position
