class Corgi {
    constructor(ctx) {
        this.ctx = ctx;
        const image = new Image();
        image.src ='src/assets/images/corgi.gif';
        this.image = image;
        this.height = 70;
        this.width = 70;
        this.mousePos = {
            x: 0,
            y: 0
        }
        
        image.onload = () => {
            this.drawCorgi();
        }

        document.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX
            this.mousePos.y = e.clientY
        });
    }

    // mouseMoveHandler(e) {
    //     const relativeX = e.clientX;
    //     const relativeY = e.clientY;
    // }

    drawCorgi() {
        this.ctx.drawImage(this.image, 50, 300, this.width, this.height);
    }
}



export default Corgi;