import Dog from "./dog";
import Corgi from "./corgi";
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
        this.draw();

    }
    
    // start() {
    //     this.score = 0;
    //     this.draw();
    // }
    
    draw() {
        this.ctx.clearRect(0, 0, 900, 600);
        this.frisbee.drawFrisbee();
        this.player.drawCorgi();
        // this.player.update(this.ctx);
        this.drawScore();
        this.drawLives();
        this.frisbeeCollision();
        this.stopGame();
        if (this.lives === 0 || this.frisbee.frisbeePos.x > 905) {
            this.gameOver = true;
        }

        requestAnimationFrame(this.draw);
    }

    stopGame() {
        if (this.gameOver) {
            this.ctx.font = "30px Wendy One";
            this.ctx.fillStyle = "black";
            this.ctx.fillText("Time to go home!", 330, 300);
        }
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

    // obstacleCollision() {
    //     if ((this.player.mousePos.x > this.tree.treePos.x - 50
    //         && this.player.mousePos.x < this.tree.treePos.x + 10) &&
    //         (this.player.mousePos.y > this.tree.treePos.y - 50
    //             && this.player.mousePos.y < this.tree.treePos.y + 10)) {
    //                 this.lives--;
    //                 this.frisbee.reset();
    //                 this.draw();
    //             }
    // }

    frisbeeCollision() {
        if ((this.player.mousePos.x > this.frisbee.frisbeePos.x - 50
                && this.player.mousePos.x < this.frisbee.frisbeePos.x + 5) && 
            (this.player.mousePos.y > this.frisbee.frisbeePos.y - 50
                && this.player.mousePos.y < this.frisbee.frisbeePos.y + 5)) {
            
            this.score++;
            this.frisbee.reset();
            this.draw();
        }
    }
}

export default Game;