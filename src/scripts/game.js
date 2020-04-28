import Corgi from "./corgi";
import Dog from "./dog";
import Frisbee from "./frisbee";
import Tree from "./tree";

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.score = 0;
        this.gameOver = false;
        
        let frisbee = new Frisbee(this.ctx);
        this.frisbee = frisbee;
        let player = new Corgi(this.ctx);
        this.player = player;

        this.draw = this.draw.bind(this);
        this.start();
    }
    
    start() {
        this.score = 0;
        this.draw();
    }
    
    draw() {
        requestAnimationFrame(this.draw);
        // this.player.update(this.ctx);
        // this.score.draw(this.ctx);
    }
}

export default Game;