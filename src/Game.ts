import Player from "./Player";
import Rect from "./Rect";
import Fruit from "./Fruit";
import Bomb from "./Bomb";
import Life from "./Life";
import Text from "./Text";
import checkColision from "./utils/checkColision";
import randomValue from "./utils/randomHelper";

export default class Game {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	tempCanvas: HTMLCanvasElement;
	tempContext: CanvasRenderingContext2D;
	gameInterval: number;
	newFruitsInterval: number;
	newBombsInterval: number;
	player: Player;
	topBar: Rect;
	lives: Life[];
	quantityOfLife: number;
	scoreText: Text;
	scoreValue: Text;
	score: number;
	floor: Rect;
	fruits: Fruit[];
	bombs: Bomb[];

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
		this.fruits = [];
		this.bombs = [];

		for (let i = 0; i < this.quantityOfLife; i++) {
			this.lives.push(new Life(this.tempCanvas));
		}

		this.score = 0;
		this.scoreText = new Text(this.tempContext, 200, 25, this.score);
		this.scoreValue = new Text(this.tempContext, 210, 50, this.score);
		this.floor = new Rect(this.tempContext, 6, 540, 288, 1, "#8b8b8f");
		this.startInterval();
	}

	clearScreen(
		context: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	): void {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	endGame(): void {
		clearInterval(this.gameInterval);
		clearInterval(this.newFruitsInterval);
		clearInterval(this.newBombsInterval);
		const response = confirm("Fim de jogo! Gostaria de jogar novamente?");
		if (response) {
			this.fruits = [];
			this.bombs = [];
			Game.droppedFruits = 0;
			Life.id = 0;
			clearInterval(this.gameInterval);
			clearInterval(this.newFruitsInterval);
			clearInterval(this.newBombsInterval);

			this.start();
		}
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

	getBombs(): void {
		this.bombs.forEach(bomb => {
			const colision = checkColision(this.player, bomb);
			if (colision) {
				this.bombs = this.bombs.filter(b => b !== bomb);
				this.endGame();
			}
		});
	}

	dropBombs(): void {
		this.bombs = this.bombs.filter(bomb => bomb.isOutOfLimits !== true);
	}

	updateStates(): void {
		this.getFruits();
		this.dropFruits();
		this.getBombs();
		this.dropBombs();
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
		this.bombs.forEach(bomb => bomb.move());
		this.bombs.forEach(bomb => bomb.draw());
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
		this.newBombsInterval = setInterval(
			() => this.bombs.push(new Bomb(this.tempCanvas)),
			randomValue(4000, 10000)
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
		clearInterval(this.gameInterval);
		clearInterval(this.newFruitsInterval);
		clearInterval(this.newBombsInterval);
		Game.droppedFruits = 0;
		Life.id = 0;
		this.fruits = [];
		this.bombs = [];
		this.start();
	}
}
