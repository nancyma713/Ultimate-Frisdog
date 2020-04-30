class Tree {
    constructor(ctx) {
        this.ctx = ctx;
        const image = new Image();
        image.src = 'src/assets/images/tree.png';
        this.image = image;
        let xPos = Math.floor(Math.random() * 600 + 100);
        this.xPos = xPos;
        let yPos = Math.floor(Math.random() * 500 + 50);
        this.yPos = yPos;
    }

    drawTree() {
        this.ctx.drawImage(this.image, this.xPos, this.yPos, 50, 50);
    }

}

export default Tree;