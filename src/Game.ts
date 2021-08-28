import Player from "./Player";
import Rect from "./Rect";

export default class Game {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	intervalId: number;
	player: Player;
	floor: Rect;
	
	constructor(canvas: HTMLCanvasElement){
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.canvas.height = 560;
		this.canvas.width = 300;
		this.canvas.style.backgroundColor ="#181820";
	}

	start(): void{
		this.player = new Player(this.canvas);
		this.player.draw();
		this.floor = new Rect(this.context, 6, 540, 288, 1, "#8b8b8f");
		this.floor.draw();
		this.startInterval();
	}

	clearScreen(): void {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	mainLoop(): void{
		this.clearScreen();
		this.player.draw();
		this.floor.draw();
	}
	
	startInterval(): void {
		const {setInterval} = window;
		this.intervalId = setInterval(() => this.mainLoop(), 1000/100);
	}

	keyDown(event: KeyboardEvent): void{
		if(event.code === "KeyD" || event.code === "ArrowRight"){
			this.player.moveRigth();
		}
		if(event.code === "KeyA" || event.code === "ArrowLeft"){
			this.player.moveLeft();
		}
	}

	mouseClicked(): void{
		this.clearScreen();
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