class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        let xPos = Math.floor(Math.random() * 600 + 100);
        this.xPos = xPos;
        let yPos = Math.floor(Math.random() * 500 + 50);
        this.yPos = yPos;

        this.drawObstacle = this.drawObstacle.bind(this);
        this.move = this.move.bind(this);
        this.randomMove = this.randomMove.bind(this);
    }

    getXPos() {
        if (this.xPos) return this.xPos;
    }

    getYPos() {
        if (this.yPos) return this.yPos;
    }

    drawObstacle() {
        this.ctx.drawImage(this.image, this.xPos, this.yPos, 60, 60)
    }

    move(dx, dy) {
        if (!this.checkValidMove(dx, dy)) {
            dy = 0;
            dx = 0;
        }
        this.xPos += dx;
        this.yPos += dy;
    }

    checkValidMove(dx, dy) {
        this.getXPos();
        if (this.xPos + dx < 50 || this.xPos + dx > 850) {
            return false;
        } else if (this.yPos + dy < 50 || this.yPos + dy > 550) {
            return false;
        } else {
            return true;
        }
    }

    randomMove() {
        let dx = Math.random() * 4 - 2;
        let dy = Math.random() * 4 - 2;
        if (this.checkValidMove(dx, dy)) {
            this.move(dx, dy);
        } else {
            this.randomMove();
        }
    }

}

export default Obstacle;