import Game from "./Game";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");

const game = new Game(canvas);
game.start();

canvas.addEventListener("click", () => {
	game.mouseClicked();
});

window.addEventListener("keydown", (event) => {
	game.keyDown(event);
});

/* canvas.addEventListener("keydown", (event) => {
	game.keyDown(event);
}); */

/* canvas.addEventListener("mousemove", (event) => {
	game.mouseMoved(event);
});	 */