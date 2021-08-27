import Game from "./Game";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");

const game = new Game(canvas);
game.start();

canvas.addEventListener("mousemove", (event) => {
	game.mouseMoved(event);
});

canvas.addEventListener("click", (event) => {
	game.mouseClicked(event);
});	