// class GameLoop {
//     constructor(game, canvas) {
//         this.game = game;
//         this.canvas = canvas;
//         this.ctx = canvas.getContext('2d');

//         this.clickModalStart = this.clickModalStart.bind(this);
//         this.stopGame = this.stopGame.bind(this);
//         this.setupControls();
//         this.stopGame();
//     }

//     setupControls() {
//         this.startModal = document.getElementById('modal');
//         this.startModal.onclick = this.clickModalStart.bind(this);

//         // this.gameOverModal = document.getElementById('gameover-modal');
//         // this.gameOverModal.onclick = this.clickModalRestart.bind(this);
//     }

//     clickModalStart(e) {
//         e.preventDefault();

//         this.startModal.classList.remove('open-modal');
//         this.startModal.classList.add('close-modal');
//         // this.startModal.onclick = e => e.preventDefault();
//         // debugger
//         this.game.draw();
//         // debugger
//     }

//     stopGame() {
//         if (this.game.gameOver) {
//             this.score = 0;
//             this.frisbees = 3;
//             this.gameOver = false;
//             this.startModal.innerHTML = "Time to go home for today! Click to fast-forward to tomorrow and play again!"
//             this.startModal.classList.remove('close-modal');
//             this.startModal.classList.add('open-modal');

//             // this.gameOverModal.classList.remove('close-modal');
//             // this.gameOverModal.classList.add('open-modal');
//             this.startModal.onclick = this.clickModalStart.bind(this);
//         };
//     }

// }

// export default GameLoop;