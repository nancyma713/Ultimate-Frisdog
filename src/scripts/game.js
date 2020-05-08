import Corgi from "./corgi";
import Frisbee from "./frisbee";
import Tree from "./tree";
import BorderCollie from "./border-collie";
import Husky from "./husky";
import Shiba from "./shiba";

const DIFFICULTY = {
    easy: { trees: 1, dogs: 2 },
    medium: { trees: 2, dogs: 3 },
    hard: { trees: 3, dogs: 4 }
}

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.score = 0;
        this.frisbees = 3;
        this.gameOver = false;

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
        this.dogs = dogs;

        let trees = [];
        for (let i = 0; i < this.difficulty.trees; i++) {
            let tree = new Tree(this.ctx);
            this.tree = tree;
            trees.push(this.tree);
        };
        this.trees = trees;

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

        this.easyButton.addEventListener('click', () => {
            this.difficulty = DIFFICULTY.easy;
        })
        this.mediumButton.addEventListener('click', () => {
            this.difficulty = DIFFICULTY.medium;
        })
        this.hardButton.addEventListener('click', () => {
            this.difficulty = DIFFICULTY.hard;
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
        let caughtFrisbees = 'frisbees';
        if (this.score === 1) {
            caughtFrisbees = 'frisbee';
        }

        if (this.gameOver) {
            cancelAnimationFrame(this.draw);
            this.frisbee.frisbeeMove.dx = 1;
            this.player.resetCorgi();
            this.startModal.innerHTML = "You caught " + this.score + " " + caughtFrisbees + " today! <br>" + "<br> <i class='fas fa-paw'></i> <br>" + "Click to fast-forward to tomorrow and play again!"
            this.startModal.classList.remove('close-modal');
            this.startModal.classList.add('open-modal');
            this.ctx.clearRect(0, 0, 900, 600);
            this.startModal.onclick = this.clickModalStart.bind(this);
        };
    }

    drawTrees() {
        for (let i = 0; i < this.difficulty.trees; i++) {
            let tree = this.trees[i];
            tree.drawObstacle();
        };
    }

    drawDogs() {
        for (let i = 0; i < this.difficulty.dogs; i++) {
            let dog = this.dogs[i]
            dog.drawObstacle();
            dog.randomMove();
        };
    }
    
    draw() {
        this.ctx.clearRect(0, 0, 900, 600);
        this.game = requestAnimationFrame(this.draw);
        this.frisbee.drawFrisbee();
        this.drawTrees();
        this.drawDogs();
        this.player.drawCorgi();
        this.drawScore();
        this.drawLives();
        this.drawMode();
        this.didCollide();
        this.lostFrisbee();
        this.stopGame();
        if (this.frisbees === 0) {
            this.gameOver = true;
        }
        
    }

    drawScore() {
        this.ctx.font = "20px Wendy One";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Score:  " + this.score, 20, 25);
    }

    drawLives() {
        this.ctx.font = "20px Wendy One";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Frisbees Left:  " + this.frisbees, 120, 25);
    }

    drawMode() {
        let difficulty = 'Hard';
        if (this.difficulty === DIFFICULTY.easy) {
            difficulty = 'Easy';
        } else if (this.difficulty === DIFFICULTY.medium) {
            difficulty = 'Medium';
        } else {
            difficulty = 'Hard';
        }

        this.ctx.font = "20px Wendy One";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Difficulty:   " + difficulty, 680, 25);
    }

    lostFrisbee() {
        if (this.frisbee.frisbeePos.x > 905) {
            this.frisbees--;
            this.frisbee.reset();
            this.draw;
        }
    }

    didCollide() {
        if (this.frisbeeCollision()) {
            this.score++;
            this.frisbee.reset();
            this.draw;
        }
        
        if (this.obstacleCollision()) {
            this.gameOver = true;
        }
    }

    obstacleCollision() {
        for (let i = 0; i < this.difficulty.trees; i++) {
            if ((this.player.mousePos.x > this.trees[i].xPos - 40
                && this.player.mousePos.x < this.trees[i].xPos + 40) &&
                (this.player.mousePos.y > this.trees[i].yPos - 40
                    && this.player.mousePos.y < this.trees[i].yPos + 40)) {
                        return true;
                    }
        }
        for (let i = 0; i < this.difficulty.dogs; i++) {
            if ((this.player.mousePos.x > this.dogs[i].xPos - 40
                && this.player.mousePos.x < this.dogs[i].xPos + 40) &&
                (this.player.mousePos.y > this.dogs[i].yPos - 40
                    && this.player.mousePos.y < this.dogs[i].yPos + 40)) {
                        return true;
                    }
        }
    }

    frisbeeCollision() {
        if ((this.player.mousePos.x > this.frisbee.frisbeePos.x - 80
                && this.player.mousePos.x < this.frisbee.frisbeePos.x) && 
            (this.player.mousePos.y > this.frisbee.frisbeePos.y - 80
                && this.player.mousePos.y < this.frisbee.frisbeePos.y)) {
            return true;
        }
    }
}

export default Game;