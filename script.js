document.addEventListener('DOMContentLoaded', function () {
  const clickSound = document.getElementById('click-sound');
  const tickSound = document.getElementById('tick-sound');
  const endSound = document.getElementById('end-sound');

  // DOM Elements
  const cat = document.getElementById('cat');
  const gameArea = document.getElementById('game-area');
  const timerDisplay = document.getElementById('timer');
  const scoreDisplay = document.getElementById('score');
  const startButton = document.getElementById('start-button');

  // Check all required elements exist
  if (!cat || !gameArea || !timerDisplay || !scoreDisplay || !startButton || !clickSound || !tickSound || !endSound) {
    console.error('Missing required game elements in HTML.');
    return;
  }

  // Game Variables
  let score = 0;
  let gameTime = 30;
  let moveInterval = 2000;
  let moveTimer = null;
  let gameTimer = null;
  let gameOver = true;

  // Move cat randomly
  function moveCat() {
    const maxX = gameArea.clientWidth - cat.clientWidth;
    const maxY = gameArea.clientHeight - cat.clientHeight;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    cat.style.left = `${randX}px`;
    cat.style.top = `${randY}px`;
  }

  // Handle cat click
  cat.addEventListener('click', () => {
    if (gameOver) return;

    clickSound.currentTime = 0;
    clickSound.play();

    score++;
    scoreDisplay.textContent = `🎯 Score: ${score}`;
  });

  // Start game logic
  function startGame() {
    // Reset values
    score = 0;
    gameTime = 30;
    moveInterval = 2000;
    gameOver = false;

    timerDisplay.textContent = `⏱️ Time Left: ${gameTime}s`;
    scoreDisplay.textContent = `🎯 Score: ${score}`;
    startButton.disabled = true;

    moveCat();

    // Start moving the cat
    moveTimer = setInterval(moveCat, moveInterval);

    // Timer countdown
    gameTimer = setInterval(() => {
      gameTime--;
      timerDisplay.textContent = `⏱️ Time Left: ${gameTime}s`;

      // 🔊 ticking sound
      tickSound.currentTime = 0;
      tickSound.play();

      // Speed up every 5 seconds
      if (gameTime % 5 === 0 && moveInterval > 400) {
        moveInterval -= 200;
        clearInterval(moveTimer);
        moveTimer = setInterval(moveCat, moveInterval);
      }

      // Time's up
      if (gameTime <= 0) {
        clearInterval(gameTimer);
        clearInterval(moveTimer);
        gameOver = true;
        timerDisplay.textContent = `⏱️ Time’s up!`;

        endSound.play();

        setTimeout(() => {
          alert(`⏱️ Time’s up!\n🎯 Final Score: ${score}`);
          startButton.disabled = false;
        }, 300);
      }
    }, 1000);
  }

  // Start on button click
  startButton.addEventListener('click', startGame);
});
