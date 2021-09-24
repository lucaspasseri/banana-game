import Player from "./Player";
import Rect from "./Rect";
import Fruit from "./Fruit";

export default class Game {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	tempCanvas: HTMLCanvasElement;
	tempContext: CanvasRenderingContext2D;
	intervalId: number;
	player: Player;
	floor: Rect;
	fruits: Fruit[];

	constructor(canvas: HTMLCanvasElement, tempCanvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.canvas.height = 560;
		this.canvas.width = 300;
		this.canvas.style.backgroundColor = "#181820";
		this.tempCanvas = tempCanvas;
		this.tempContext = this.tempCanvas.getContext("2d");
		this.tempCanvas.height = 560;
		this.tempCanvas.width = 300;
	}

	start(): void {
		this.player = new Player(this.tempCanvas);
		//this.player.draw();
		this.floor = new Rect(this.tempContext, 6, 540, 288, 1, "#8b8b8f");
		//this.floor.draw();
		this.fruits = [];
		const orange = new Fruit(this.tempCanvas, "../assets/orange.png");
		this.fruits.push(orange);
		//this.fruits.forEach(fruit => fruit.draw());
		this.startInterval();
	}

	clearScreen(
		context: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	): void {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	mainLoop(): void {
		this.clearScreen(this.tempContext, this.tempCanvas);
		this.player.draw();
		this.floor.draw();
		this.fruits.forEach(fruit => fruit.move());
		this.fruits.forEach(fruit => fruit.draw());
		this.clearScreen(this.context, this.canvas);
		this.context.drawImage(this.tempCanvas, 0, 0);
	}

	startInterval(): void {
		const { setInterval } = window;
		this.intervalId = setInterval(() => this.mainLoop(), 1000 / 60);
	}

	keyDown(event: KeyboardEvent): void {
		if (event.code === "KeyD" || event.code === "ArrowRight") {
			this.player.move("right");
		}
		if (event.code === "KeyA" || event.code === "ArrowLeft") {
			this.player.move("left");
		}
	}

	mouseClicked(): void {
		this.clearScreen(this.context, this.canvas);
		this.start();
	}
}

/* mouseMoved(event: MouseEvent): void{
	const xPositionMouse = event.clientX;
	const yPositionMouse = event.clientY;
	const xPositionCanvas = this.canvas.getBoundingClientRect().left;
	const yPositionCanvas = this.canvas.getBoundingClientRect().top;

	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

	this.ball = new Ball(
		this.context,
		xPositionMouse - xPositionCanvas,
		yPositionMouse - yPositionCanvas,
		10,
		"#0000FF");
	this.ball.draw();
} */

/* mouseClicked(event: MouseEvent): void{
	const xPositionMouse = event.clientX;
	const yPositionMouse = event.clientY;
	const xPositionCanvas = this.canvas.getBoundingClientRect().left;
	const yPositionCanvas = this.canvas.getBoundingClientRect().top;

	this.ball = new Ball(
		this.context,
		xPositionMouse - xPositionCanvas,
		yPositionMouse - yPositionCanvas,
		10,
		"#00FF00");
	this.ball.draw();
} */
