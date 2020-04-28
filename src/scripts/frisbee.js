class Frisbee {
    constructor(ctx) {
        this.ctx = ctx;
        const frisbeeRadius = 8;
        this.frisbeeRadius = frisbeeRadius;
        let x = frisbeeRadius;
        this.x = x;
        let y = Math.floor(Math.random() * 600);
        this.y = y;

        this.drawFrisbee();
    }
    
    drawFrisbee() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.frisbeeRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgb(37, 90, 187)';
        this.ctx.fill();
        this.ctx.closePath();
    }

}

export default Frisbee;