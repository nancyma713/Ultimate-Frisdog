import Dog from './dog';

class Shiba extends Dog {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        const image = new Image;
        image.src = "src/assets/images/shiba.png";
        this.image = image;
        this.height = 60;
        this.width = 60;
        this.xPos = this.getXPos();
        this.yPos = this.getYPos();
    }
}

export default Shiba;