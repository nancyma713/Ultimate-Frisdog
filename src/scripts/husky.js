import Obstacle from './obstacle';

const IMG = ["src/assets/images/husky.png", "src/assets/images/husky2.png", "src/assets/images/husky3.png"]

class Husky extends Obstacle {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        const image = new Image;
        image.src = IMG[Math.floor(Math.random() * IMG.length)];
        this.image = image;
        this.height = 60;
        this.width = 60;
        this.xPos = this.getXPos();
        this.yPos = this.getYPos();
    }
}

export default Husky;