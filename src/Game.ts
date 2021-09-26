import Player from "./Player";
import Rect from "./Rect";
import Fruit from "./Fruit";
import Life from "./Life";
import Text from "./Text";
import checkColision from "./utils/checkColision";

export default class Game {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	tempCanvas: HTMLCanvasElement;
	tempContext: CanvasRenderingContext2D;
	gameInterval: number;
	newFruitsInterval: number;
	player: Player;
	topBar: Rect;
	lives: Life[];
	quantityOfLife: number;
	scoreText: Text;
	scoreValue: Text;
	score: number;
	floor: Rect;
	fruits: Fruit[];

	static droppedFruits = 0;

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
		this.topBar = new Rect(this.tempContext, 0, 0, 300, 60, "#000");
		this.quantityOfLife = 3;
		this.lives = [];

		for (let i = 0; i < this.quantityOfLife; i++) {
			this.lives.push(new Life(this.tempCanvas));
		}

		this.score = 0;
		this.scoreText = new Text(this.tempContext, 200, 25, this.score);
		this.scoreValue = new Text(this.tempContext, 210, 50, this.score);
		this.floor = new Rect(this.tempContext, 6, 540, 288, 1, "#8b8b8f");
		this.fruits = [];
		this.startInterval();
	}

	clearScreen(
		context: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	): void {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	getFruits(): void {
		this.fruits.forEach(fruit => {
			const colision = checkColision(this.player, fruit);
			if (colision) {
				this.fruits = this.fruits.filter(f => f !== fruit);
				this.score += fruit.points;
				if (fruit.isBanana) {
					this.score *= 2;
				}
			}
		});
	}

	endGame(): void {
		clearInterval(this.gameInterval);
		clearInterval(this.newFruitsInterval);
		const response = confirm("Fim de jogo!");
		console.log(response);
		if (response) {
			Game.droppedFruits = 0;
			Life.id = 0;
			this.fruits = [];
			this.start();
		}
	}

	dropFruits(): void {
		this.fruits = this.fruits.flatMap(fruit => {
			if (fruit.wasDropped) {
				if (Game.droppedFruits < this.lives.length) {
					const currentLife = this.lives.length - 1 - Game.droppedFruits;
					this.lives[currentLife].updateImage("./assets/heart-empty.png");
					Game.droppedFruits += 1;
				} else {
					this.endGame();
				}
				return [];
			} else {
				return [fruit];
			}
		});
	}

	updateStates(): void {
		this.getFruits();
		this.dropFruits();
	}

	renderGame(): void {
		this.clearScreen(this.tempContext, this.tempCanvas);
		this.player.draw();
		this.topBar.draw();
		this.lives.forEach(life => life.draw());
		this.scoreText.draw("text", this.score);
		this.scoreValue.draw("value", this.score);
		this.floor.draw();
		this.fruits.forEach(fruit => fruit.move());
		this.fruits.forEach(fruit => fruit.draw());
		this.clearScreen(this.context, this.canvas);
		this.context.drawImage(this.tempCanvas, 0, 0);
	}

	mainLoop(): void {
		this.updateStates();
		this.renderGame();
	}

	startInterval(): void {
		const { setInterval } = window;
		this.gameInterval = setInterval(() => this.mainLoop(), 1000 / 60);
		this.newFruitsInterval = setInterval(
			() => this.fruits.push(new Fruit(this.tempCanvas)),
			2000
		);
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
		Game.droppedFruits = 0;
		Life.id = 0;
		this.fruits = [];
		this.start();
	}
}
