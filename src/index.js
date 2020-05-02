import Game from './scripts/game';

import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById("canvas-dog-park");
    let ctx = canvas.getContext("2d");

    let game = new Game(ctx, canvas);
})