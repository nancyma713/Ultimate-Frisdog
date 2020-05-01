import Obstacle from './obstacle';

class BorderCollie extends Obstacle {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        const image = new Image;
        image.src = "src/assets/images/brown-dog.png";
        this.image = image;
        this.height = 60;
        this.width = 60;
        this.xPos = this.getXPos();
        this.yPos = this.getYPos();
    }
}

export default BorderCollie;