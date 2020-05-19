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
        this.musicPlaying = true;

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

        let music = new Audio('src/assets/sounds/music.mp3');
        music.loop = true;
        music.volume = 0.2;
        this.music = music;

        this.setup = this.setup.bind(this);
        this.draw = this.draw.bind(this);
        this.clickModalStart = this.clickModalStart.bind(this);
        this.clickGameStart = this.clickGameStart.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.playMusic = this.playMusic.bind(this);
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
            this.easyButton.classList.add('active-button');
            this.mediumButton.classList.remove('active-button');
            this.hardButton.classList.remove('active-button');
            this.difficulty = DIFFICULTY.easy;
        })
        this.mediumButton.addEventListener('click', () => {
            this.easyButton.classList.remove('active-button');
            this.mediumButton.classList.add('active-button');
            this.hardButton.classList.remove('active-button');
            this.difficulty = DIFFICULTY.medium;
        })
        this.hardButton.addEventListener('click', () => {
            this.easyButton.classList.remove('active-button');
            this.mediumButton.classList.remove('active-button');
            this.hardButton.classList.add('active-button');
            this.difficulty = DIFFICULTY.hard;
        })
        
        this.muteButton = document.getElementById('mute-music');
        this.muteButton.onclick = this.muteMusic.bind(this);
    
        this.playButton = document.getElementById('play-music');
        this.playButton.onclick = this.playMusic.bind(this);

        this.startModal = document.getElementById('modal');
        this.startModal.onclick = this.clickModalStart.bind(this);

        this.startGame = document.getElementById('park-view');
        this.startGame.onclick = this.clickGameStart.bind(this);

        this.playMusic();
    }

    muteMusic() {
        this.music.pause();
        this.playButton.classList.remove('active-button');
        this.muteButton.classList.add('active-button');
    }

    playMusic() {
        this.muteButton.classList.remove('active-button');
        this.playButton.classList.add('active-button');
        this.music.play();
    }

    clickModalStart(e) {
        e.preventDefault();
        this.score = 0;
        this.frisbees = 3;
        this.gameOver = false;
        this.startModal.classList.remove('open-modal');
        this.startModal.classList.add('close-modal');
        this.startGame.classList.remove('close-park-view');
        this.startGame.classList.add('open-park-view');
        this.startModal.onclick = e => e.preventDefault();
        this.setup();
    }

    clickGameStart(e) {
        e.preventDefault();
        this.frisbee.frisbeeMove.dx = 1;
        this.startGame.classList.remove('open-park-view');
        this.startGame.classList.add('close-park-view');
        this.draw();
    }

    stopGame() {
        let caughtFrisbees = 'frisbees';
        if (this.score === 1) {
            caughtFrisbees = 'frisbee';
        }

        if (this.gameOver) {
            this.frisbee.frisbeeMove.dx = 0;
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

    setup() {
        this.ctx.clearRect(0, 0, 900, 600);
        this.drawTrees();
        this.drawDogs();
        this.drawScore();
        this.drawLives();
        this.drawMode();
        const game = requestAnimationFrame(this.setup);
        if (this.gameOver) {
            this.cancelAnimationFrame(game);
        }
    }
    
    draw() {
        this.frisbee.drawFrisbee();
        this.player.drawCorgi();
        this.lostFrisbee();
        this.didCollide();
        this.stopGame();
        const game = requestAnimationFrame(this.draw);
        if (this.frisbees === 0) {
            this.frisbee.frisbeeMove.dx = 0;
            this.gameOver = true;
            this.cancelAnimationFrame(game);
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