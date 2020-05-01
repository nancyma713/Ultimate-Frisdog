import Obstacle from './obstacle';

class Husky extends Obstacle {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        const image = new Image;
        image.src = "src/assets/images/husky.png";
        this.image = image;
        this.height = 60;
        this.width = 60;
        this.xPos = this.getXPos();
        this.yPos = this.getYPos();
    }
}

export default Husky;