class Frisbee {
    constructor(ctx) {
        this.ctx = ctx;
        const frisbeeRadius = 8;
        this.frisbeeRadius = frisbeeRadius;

        this.frisbeePos = {
            x: frisbeeRadius,
            y: Math.floor(Math.random() * 550 + 50)
        }
        // let x = frisbeeRadius;
        // this.x = x;
        // let y = Math.floor(Math.random() * 600);
        // this.y = y;

        const dx = 1;
        this.dx = dx;
        const dy = Math.random() * (-1);
        // const dy = -0.5;
        this.dy = dy;

        this.drawFrisbee();
    }
    
    drawFrisbee() {
        this.ctx.beginPath();
        this.ctx.arc(this.frisbeePos.x, this.frisbeePos.y, this.frisbeeRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgb(37, 90, 187)';
        this.ctx.fill();
        this.ctx.closePath();

        this.frisbeePos.x += this.dx;
        this.frisbeePos.y += this.dy;

        if (this.frisbeePos.y + this.dy > 650 || this.frisbeePos.y + this.dy < 50) {
            this.dy = -this.dy;
        }
        // if (this.y + this.dy < this.frisbeeRadius) {
        //     this.dy = -this.dy;
        // }
    }

}

export default Frisbee;