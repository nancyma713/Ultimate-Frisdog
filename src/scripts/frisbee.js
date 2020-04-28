class Frisbee {
    constructor() {
        const frisbeeRadius = 10;
        this.x = frisbeeRadius;
        this.y = Math.floor(Math.random() * canvas.height);
    }
    
    drawFrisbee() {
        ctx.beginPath();
        ctx.arc(x, y, frisbeeRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }
}

export default Frisbee;