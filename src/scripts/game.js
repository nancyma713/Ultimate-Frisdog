class Game {
    constructor(ctx, canvas) {
        this.score = 0;
        this.gameOver = false;

        this.canvas = canvas;
        this.ctx = ctx;

        const frisbeeRadius = 10;
        const x = frisbeeRadius;
        const y = Math.floor(Math.random() * canvas.height);

        function drawFrisbee() {
            ctx.beginPath();
            ctx.arc(x, y, frisbeeRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.closePath();
        }

        function draw() {
            drawFrisbee();

            // requestAnimationFrame(draw);
        }

        draw();
    }
}

export default Game;