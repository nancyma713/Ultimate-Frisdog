class Tree {
    constructor(ctx) {
        this.ctx = ctx;
        const image = new Image();
        image.src = 'src/assets/images/tree.png';
        this.image = image;
        this.height = 60;
        this.width = 50;
        this.treePos = {
            x: Math.floor(Math.random() * 700 + 100),
            y: Math.floor(Math.random() * 550)
        }

        image.onload = () => {
            this.drawTree();
        }
    }

    getXPos() {
        if (this.xPos) return this.xPos;
    }

    drawTree() {
        this.ctx.drawImage(this.image, this.treePos.x, this.treePos.y, this.width, this.height);
    }

}

export default Tree;