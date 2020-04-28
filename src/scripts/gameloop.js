class GameLoop {
    constructor(game, canvas) {
        this.game = game;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    start() {
        this.game.score = 0;
        this.game.gameover = false;

        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        if (this.game.gameover) {
            this.endGame();
        } else {
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    endGame() {
        this.ctx.clearRect(0, 0, 900, 600)
    }
}

export default GameLoop;