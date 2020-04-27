import Game from './scripts/game';
// import Corgi from './scripts/corgi';

import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById("canvas-dog-park");
    let ctx = canvas.getContext("2d");
    window.ctx = ctx;

    const game = new Game(ctx, canvas)
})