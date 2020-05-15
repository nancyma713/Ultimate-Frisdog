# Ultimate Frisdog

## Background and Overview
You're out at the dog park with your human and want to show off your frisbee-catching skills despite your short legs!

Use your cursor to catch as many frisbees as possible or else your human will want to go home. Avoid other dogs and obstacles in the park, and don't let your frisbee fly out to the left or a car will run over your precious toy. Mysterious winds blow from north and south of the park, so watch out!

You only have three frisbees. If you run into a tree or another dog, it's game over!

## Functionality and MVPs

In Ultimate Frisdog, players are able to:
1. Start and reset the game.
2. Choose a difficulty setting, which will impact the number of obstacles in the dog park.
3. Control their corgi character using mouse movements.

In addition, this project includes:
1. Increasing frisbee speeds with each frisbee thrown.
2. A production README.

## Wireframes

Thia game consists of a single screen containing instructions on how to
play, the gameplay area, and nav links to my GitHub, LinkedIn, and Angellist. 
The gameplay area will consist of a indicator for the current score (number of 
frisbees caught) and frisbees left, as well as the difficulty setting.

![alt_text](src/assets/images/wireframe.png "wireframes")

## Architecture and Technology
This project is implemented with the following technologies:
- JavaScript for game logic
- HTML5 Canvas to render the game

Main scripts include:
- ```game.js```: holds game logic - creates and updates the game
- ```corgi.js```: constructs the ```Corgi``` player object
- ```obstacle.js```: constructs stationary and mobile obstacle objects
- ```frisbee.js```: holds logic for the moving ```Frisbee```

## Challenges
Implementing the different collision logic (colliding with a frisbee is good but with an obstacle would lose the game) was really interesting. The main function ```didCollide``` checks for each case, and updates the game as necessary.

```javascript
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
```

### Future Bonus Features
1. Add more difficulty settings and more variability in settings
2. Player can pick up bones on the ground to replenish energy

Music from [Nintendo](https://www.nintendo.com).
