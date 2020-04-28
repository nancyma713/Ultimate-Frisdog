import Corgi from "./corgi";
import Dog from "./dog";
import Frisbee from "./frisbee";
import Tree from "./tree";

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
        
        let frisbee = new Frisbee(this.ctx);
        this.frisbee = frisbee;
        let player = new Corgi(this.ctx, this.canvas);
        this.player = player;

        this.draw = this.draw.bind(this);
        this.start();

    }
    
    start() {
        this.score = 0;
        this.draw();
    }
    
    draw() {
        this.ctx.clearRect(0, 0, 900, 600);
        this.frisbee.drawFrisbee();
        this.player.drawCorgi();
        // this.player.update(this.ctx);
        this.drawScore();
        this.drawLives();
        this.frisbeeCollision();

        requestAnimationFrame(this.draw);
    }

    drawScore() {
        this.ctx.font = "16px Wendy One";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Score: " + this.score, 20, 20);
    }

    drawLives() {
        this.ctx.font = "16px Wendy One";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Lives: " + this.lives, 100, 20);
    }

    frisbeeCollision() {
        // if ((this.player.mousePos.x >= this.frisbee.frisbeePos.x && this.frisbee.frisbeePos.x - 10 > this.player.mousePos.x) && (this.frisbee.frisbeePos.y >= this.player.mousePos.y - 10 && this.player.mousePos.y >= this.frisbee.frisbeePos.y)) {
        //     this.score++;
        //     this.draw();
        // } else if ((this.frisbee.frisbeePos.x >= this.player.mousePos.x && this.player.mousePos.x - 10 >= this.frisbee.frisbeePos.x) &&
        //     (this.frisbee.frisbeePos.y - 10 >= this.player.mousePos.y && this.player.mousePos.y >= this.frisbee.frisbeePos.y)) {
        //     this.score++;
        //     this.draw();
        // } else if ((this.player.mousePos.x >= this.frisbee.frisbeePos.x && this.frisbee.frisbeePos.x + 10 > this.player.mousePos.x) && (this.frisbee.frisbeePos.y >= this.player.mousePos.y + 10 && this.player.mousePos.y >= this.frisbee.frisbeePos.y)) {
        //     this.score++;
        //     this.draw();
        // } else if ((this.frisbee.frisbeePos.x >= this.player.mousePos.x && this.player.mousePos.x + 10 >= this.frisbee.frisbeePos.x) &&
        //     (this.frisbee.frisbeePos.y + 10 >= this.player.mousePos.y && this.player.mousePos.y >= this.frisbee.frisbeePos.y)) {
        //     this.score++;
        //     this.draw();
        // } 

        if ((this.player.mousePos.x > this.frisbee.frisbeePos.x - 50
                && this.player.mousePos.x < this.frisbee.frisbeePos.x + 10) && 
            (this.player.mousePos.y > this.frisbee.frisbeePos.y - 50
                && this.player.mousePos.y < this.frisbee.frisbeePos.y + 10)) {
            
            this.frisbee.frisbeePos.x = 8;
            this.frisbee.frisbeePos.y = Math.floor(Math.random() * 550 + 50);
            this.score++;
            this.draw();
        }
    }
}

export default Game;