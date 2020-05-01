import Obstacle from './obstacle';

class Tree extends Obstacle {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        const image = new Image();
        image.src = 'src/assets/images/tree.png';
        this.image = image;
        this.height = 60;
        this.width = 50;
        this.xPos = this.getXPos();
        this.yPos = this.getYPos();
    }
}

export default Tree;