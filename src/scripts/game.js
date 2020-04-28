import Corgi from "./corgi";
import Dog from "./dog";
import Frisbee from "./frisbee";
import Tree from "./tree";

class Game {
    constructor() {
        this.ctx = ctx;
        this.canvas = canvas;
        this.score = 0;
        this.gameOver = false;
        
        this.player = new Corgi(this.ctx);
        this.frisbee = new Frisbee();
        
        this.draw = this.draw.bind(this);
    }

    start() {
        this.score = 0;
        this.draw();
    }

    draw() {
        this.frisbee.drawFrisbee();
        requestAnimationFrame(this.draw);
        // this.player.update(this.ctx);
        // this.score.draw(this.ctx);
    }
}

export default Game;