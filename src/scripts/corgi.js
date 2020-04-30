class Corgi {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        const image = new Image();
        image.src ='src/assets/images/corgi.gif';
        this.image = image;
        this.height = 70;
        this.width = 70;
        this.mousePos = {
            x: 0,
            y: 300
        }
        
        image.onload = () => {
            this.drawCorgi();
        }

        this.mouseMoveHandler();
    }

    mouseMoveHandler() {
        this.canvas.addEventListener('mousemove',
            (e) => {
                // debugger
                this.mousePos.x = e.clientX - this.canvas.offsetLeft - 80;
                this.mousePos.y = e.clientY - this.canvas.offsetTop - 80;
                // debugger
                
                this.drawCorgi();
            })
    }

    drawCorgi() {
        this.ctx.drawImage(this.image, this.mousePos.x, this.mousePos.y, this.width, this.height);
        // debugger
    }

}



export default Corgi;