import Dog from "./dog";
import Corgi from "./corgi";
import Frisbee from "./frisbee";
import Tree from "./tree";
import BorderCollie from "./border-collie";
import Husky from "./husky";
import Shiba from "./shiba";
import Difficulty from './difficulty';

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.score = 0;
        this.frisbees = 3;
        this.gameOver = false;
        this.difficulty = {
            easy: { trees: 1, dogs: 2 },
            medium: { trees: 2, dogs: 3 },
            hard: { trees: 3, dogs: 4} 
        };
        
        let frisbee = new Frisbee(this.ctx);
        this.frisbee = frisbee;
        let player = new Corgi(this.ctx, this.canvas);
        this.player = player;

        let dogs = [];
        this.dogs = dogs;
        // for (let i = 0; i < this.difficulty.hard.dogs; i++) {
        //     this.dogs.push(new Shiba(this.ctx));
        // };

        let borderCollie = new BorderCollie(this.ctx);
        this.borderCollie = borderCollie;
        dogs.push(this.borderCollie);
        let husky = new Husky(this.ctx);
        this.husky = husky;
        dogs.push(this.husky);
        let shiba = new Shiba(this.ctx);
        this.shiba = shiba;
        dogs.push(this.shiba);

        let trees = [];
        this.trees = trees;
        for (let i = 0; i < this.difficulty.hard.trees; i++) {
            this.trees.push(new Tree(this.ctx));
        };

        this.draw = this.draw.bind(this);
        // this.draw();
        // this.start = this.start.bind(this);
        this.setupControls();
    }

    setupControls() {
        this.modalEl = document.getElementById('modal');
        this.modalEl.onclick = this.clickModalStart.bind(this);

        this.gameOverModal = document.getElementById('gameover-modal');
        // this.gameOverModal.onclick = this.clickModalRestart.bind(this);
    }

    clickModalStart(e) {
        e.preventDefault();
        this.modalEl.classList.remove('open-modal');
        this.modalEl.classList.add('close-modal');
        this.modalEl.onclick = e => e.preventDefault();
        this.draw();
    }
    
    stopGame() {
        if (this.gameOver) {
            this.gameOverModal.classList.remove('close-modal');
            this.gameOverModal.classList.add('open-modal');
            // this.gameOverModal.onclick = e => e.preventDefault();
        }
    }

    drawTrees() {
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].drawTree();
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, 900, 600);
        this.drawTrees();
        this.frisbee.drawFrisbee();
        this.borderCollie.render();
        this.husky.render();
        this.shiba.render();
        this.player.drawCorgi();
        this.drawScore();
        this.drawLives();
        this.didCollide();
        this.lostFrisbee();
        this.stopGame();
        if (this.frisbees === 0) {
            this.gameOver = true;
        }
        
        this.game = requestAnimationFrame(this.draw);
    }

    drawScore() {
        this.ctx.font = "16px Wendy One";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Score: " + this.score, 20, 20);
    }

    drawLives() {
        this.ctx.font = "16px Wendy One";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Frisbees Left: " + this.frisbees, 100, 20);
    }

    lostFrisbee() {
        if (this.frisbee.frisbeePos.x > 905) {
            this.frisbees--;
            this.frisbee.reset();
            this.player.resetCorgi();
            setTimeout(this.draw, 500);
        }
    }

    didCollide() {
        if (this.frisbeeCollision()) {
            this.score++;
            this.frisbee.reset();
            this.player.resetCorgi();
            setTimeout(this.draw, 1500);
            // this.draw();
        }
        
        if (this.obstacleCollision()) {
            this.gameOver = true;
        }
    }

    obstacleCollision() {
        for (let i = 0; i < this.trees.length; i++) {
            if ((this.player.mousePos.x > this.trees[i].treePos.x - 20
                && this.player.mousePos.x < this.trees[i].treePos.x + 5) &&
                (this.player.mousePos.y > this.trees[i].treePos.y - 20
                    && this.player.mousePos.y < this.trees[i].treePos.y + 5)) {
                        return true;
                    }
        }
        for (let i = 0; i < this.dogs.length; i++) {
            if ((this.player.mousePos.x > this.dogs[i].xPos - 20
                && this.player.mousePos.x < this.dogs[i].xPos + 5) &&
                (this.player.mousePos.y > this.dogs[i].yPos - 20
                && this.player.mousePos.y < this.dogs[i].yPos + 5)) {
                return true;
            }
        }
    }

    frisbeeCollision() {
        if ((this.player.mousePos.x > this.frisbee.frisbeePos.x - 50
                && this.player.mousePos.x < this.frisbee.frisbeePos.x + 10) && 
            (this.player.mousePos.y > this.frisbee.frisbeePos.y - 50
                && this.player.mousePos.y < this.frisbee.frisbeePos.y + 10)) {
            return true;
        }
    }
}

export default Game;