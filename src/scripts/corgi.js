class Corgi {
    constructor(ctx) {
        this.ctx = ctx;
        const image = new Image;
        image.src ='src/assets/images/corgi.gif';
        this.image = image;
        this.height = 50;
        this.width = 50;
        this.startPos = {
            x: 10,
            y: 10
        };
        
        this.drawCorgi = this.drawCorgi.bind(this);
        this.drawCorgi();
    }

    drawCorgi() {
        ctx.drawImage(this.image, 10, 10, this.width, this.height);
    }
}



export default Corgi;