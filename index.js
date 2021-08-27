import Game from "./Game.js";

const canvas = document.querySelector("#canvas");

const game = new Game(canvas);
game.start();

canvas.addEventListener("mousemove", (event) => {
	game.mouseMoved(event);
});

canvas.addEventListener("click", (event) => {
	game.mouseClicked(event);
});