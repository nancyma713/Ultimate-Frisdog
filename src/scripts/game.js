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

        const DIFFICULTY = {
            easy: { trees: 1, dogs: 2 },
            medium: { trees: 2, dogs: 3 },
            hard: { trees: 3, dogs: 4 }
        }
        this.difficulty = DIFFICULTY.hard;
        
        let frisbee = new Frisbee(this.ctx);
        this.frisbee = frisbee;
        let player = new Corgi(this.ctx, this.canvas);
        this.player = player;

        let dogs = [];
        let borderCollie = new BorderCollie(this.ctx);
        this.borderCollie = borderCollie;
        dogs.push(this.borderCollie);
        let husky = new Husky(this.ctx);
        this.husky = husky;
        dogs.push(this.husky);
        let shiba = new Shiba(this.ctx);
        this.shiba = shiba;
        dogs.push(this.shiba);
        let shiba2 = new Shiba(this.ctx);
        this.shiba2 = shiba2;
        dogs.push(this.shiba2);
        this.dogs = dogs.slice(0, this.difficulty.dogs);

        let trees = [];
        this.trees = trees;
        for (let i = 0; i < this.difficulty.trees; i++) {
            this.trees.push(new Tree(this.ctx));
        };

        this.draw = this.draw.bind(this);
        this.clickModalStart = this.clickModalStart.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.setupControls();
    }

    setupControls() {
        const easyButton = document.getElementById('easy-button');
        this.easyButton = easyButton;
        const mediumButton = document.getElementById('medium-button');
        this.mediumButton = mediumButton;
        const hardButton = document.getElementById('hard-button');
        this.hardButton = hardButton;

        easyButton.addEventListener('click', () => {
            return this.difficulty = DIFFICULTY.easy;
        })
        mediumButton.addEventListener('click', () => {
            return this.difficulty = DIFFICULTY.medium;
        })
        hardButton.addEventListener('click', () => {
            return this.difficulty = DIFFICULTY.hard;
        })

        this.startModal = document.getElementById('modal');
        this.startModal.onclick = this.clickModalStart.bind(this);
    }

    clickModalStart(e) {
        e.preventDefault();
        this.score = 0;
        this.frisbees = 3;
        this.gameOver = false;
        this.startModal.classList.remove('open-modal');
        this.startModal.classList.add('close-modal');
        this.startModal.onclick = e => e.preventDefault();
        this.draw();
    }

    stopGame() {
        if (this.gameOver) {
            this.startModal.innerHTML = "Time to go home for today! <br>" + "<br> <i class='fas fa-paw'></i> <br>" + "Click to fast-forward to tomorrow and play again!"
            this.startModal.classList.remove('close-modal');
            this.startModal.classList.add('open-modal');
            this.ctx.clearRect(0, 0, 900, 600);
            this.startModal.onclick = this.clickModalStart.bind(this);
        };
    }

    drawTrees() {
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].drawTree();
        };
    }

    drawDogs() {
        for (let i = 0; i < this.difficulty.dogs; i++) {
            let dog = this.dogs[i]
            dog.render();
            dog.randomMove();
        };
    }
    
    draw() {
        this.ctx.clearRect(0, 0, 900, 600);
        this.game = requestAnimationFrame(this.draw);
        this.drawTrees();
        this.frisbee.drawFrisbee();
        this.drawDogs();
        this.player.drawCorgi();
        this.drawScore();
        this.drawLives();
        this.didCollide();
        this.lostFrisbee();
        this.stopGame();
        if (this.frisbees === 0) {
            this.gameOver = true;
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
        this.ctx.fillText("Frisbees Left: " + this.frisbees, 100, 20);
    }

    lostFrisbee() {
        if (this.frisbee.frisbeePos.x > 905) {
            this.frisbees--;
            this.frisbee.reset();
            setTimeout(this.draw, 500);
        }
    }

    didCollide() {
        if (this.frisbeeCollision()) {
            this.score++;
            this.frisbee.reset();
            setTimeout(this.draw, 1500);
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