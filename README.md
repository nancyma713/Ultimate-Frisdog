# Ultimate Frisdog

## Background and Overview
You're out at the dog park with your human Master and want to show off your
frisbee-catching skills despite your short legs! It's a beautiful day out so
there are a lot of other dogs in the park and cars on the road nearby. You want
to catch as many frisbees as possible or else your Master will want to go home.
Avoid other dogs and obstacles in the dog park as you run to catch the frisbee,
but don't let it fly out of the dog park or a car will run over your precious
toy.

When the frisbee flies out of the dog park, it's game over! You have three
chances not to collide with any obstacles.

## Functionality and MVPs

In Ultimate Frisdog, players will be able to:
1. Start, pause, or reset the game.
2. Choose a difficulty setting, which will impact the speed of the frisbee and
the number of obstacles in the dog park.
3. Control their corgi character using mouse movements.

In addition, this project includes:
1. A High-scorers board
2. A production README

## Wireframes

Thia game will consist of a single screen containing instructions on how to
play, a high-scorer's board, the gameplay area, and nav links to my GitHub,
LinkedIn, and Angellist. The gameplay area will consist of a indicator for the
current score (number of frisbees caught) and chances left, as well as the
difficulty setting.

![alt_text](src/assets/images/wireframe.png "wireframes")

## Architecture and Technology
This project will be implemented with the following technologies:
- JavaScript for game logic
- HTML5 Canvas to render the game

Main scripts will include:
- ```game.js```: holds game logic - will create and update the game
- ```corgi.js```: constructs the ```Corgi``` object
- ```tree.js```: constructs stationary ```Tree``` obstacle object
- ```dog.js```: constructs moving ```Dog``` obstacle object

## Implementation Timeline

**Day 1**: Set up basic files, research and familiarize with Canvas. Create
gameplay background.

**Day 2**: Set up basic game logic and sprites.

**Day 3**: Dive deeper into game logic. Implement different difficulty settings.

**Day 4**: Work on high score board and save users' high scores. Finalize 
styling and layout.

### Future Bonus Features
1. Add more difficulty settings and time countdown
2. Can pick up bones on the ground to replenish energy
