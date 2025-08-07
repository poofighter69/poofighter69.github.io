const cat = document.getElementById('cat');
const gameArea = document.getElementById('game-area');
const timerDisplay = document.getElementById('timer');

let score = 0;
let gameTime = 30; // seconds
let moveInterval = 2000; // ms (starts slow)
let moveTimer;
let gameTimer;
let gameOver = false;

// Move cat to random position
function moveCat() {
  if (gameOver) return;

  const maxX = gameArea.clientWidth - cat.clientWidth;
  const maxY = gameArea.clientHeight - cat.clientHeight;
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  cat.style.left = `${randX}px`;
  cat.style.top = `${randY}px`;
}

// Handle click on cat
cat.addEventListener('click', () => {
  if (gameOver) return;
  score++;
});

// Start the game
function startGame() {
  moveCat(); // initial move

  // Cat keeps moving
  moveTimer = setInterval(moveCat, moveInterval);

  // Timer countdown
  gameTimer = setInterval(() => {
    gameTime--;

    // 🕒 Update timer display
    timerDisplay.textContent = `⏱️ Time Left: ${gameTime}s`;

    // Every 5 seconds, increase speed
    if (gameTime % 5 === 0 && moveInterval > 400) {
      moveInterval -= 200;
      clearInterval(moveTimer);
      moveTimer = setInterval(moveCat, moveInterval);
    }

    // End game
    if (gameTime <= 0) {
      clearInterval(gameTimer);
      clearInterval(moveTimer);
      gameOver = true;
      timerDisplay.textContent = `⏱️ Time’s up!`;
      setTimeout(() => {
        alert(`⏱️ Time’s up!\n🎯 Final Score: ${score}`);
      }, 300);
    }
  }, 1000);
}

startGame();
