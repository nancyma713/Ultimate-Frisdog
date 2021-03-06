class Frisbee {
    constructor(ctx) {
        this.ctx = ctx;
        const frisbeeRadius = 8;
        this.frisbeeRadius = frisbeeRadius;

        this.frisbeePos = {
            x: frisbeeRadius,
            y: Math.floor(Math.random() * 500 + 50)
        }

        this.frisbeeMove = {
            dx: 1,
            dy: Math.random() * (1) + (-0.5)
        }

        this.drawFrisbee = this.drawFrisbee.bind(this);
    }
    
    drawFrisbee() {
        this.ctx.beginPath();
        this.ctx.arc(this.frisbeePos.x, this.frisbeePos.y, this.frisbeeRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgb(37, 90, 187)';
        this.ctx.fill();
        this.ctx.closePath();

        this.frisbeePos.x += this.frisbeeMove.dx;
        this.frisbeePos.y += this.frisbeeMove.dy;

        if (this.frisbeePos.y + this.frisbeeMove.dy > 550 || this.frisbeePos.y + this.frisbeeMove.dy < 50) {
            this.frisbeeMove.dy = -(this.frisbeeMove.dy / 10);
        }
    }

    reset() {
        this.frisbeePos.x = this.frisbeeRadius;
        this.frisbeePos.y = Math.floor(Math.random() * 500 + 50);
        this.frisbeeMove.dy = Math.random() * (1) + (-0.5);
        if (this.frisbeeMove.dx < 20) {
            this.frisbeeMove.dx += 0.3;
        } else if (this.frisbeeMove.dx >= 20 && this.frisbeeMove.dx < 30) {
            this.frisbeeMove.dx += 0.2;
        } else if (this.frisbeeMove.dx >= 30 && this.frisbeeMove.dx < 35) {
            this.frisbeeMove.dx += 0.1;
        }
    }

}

export default Frisbee;