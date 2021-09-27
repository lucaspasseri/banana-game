import Player from "./Player";
import Rect from "./Rect";
import Fruit from "./Fruit";
import Bomb from "./Bomb";
import Heart from "./Heart";
import Health from "./Health";
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
	newFruitsInterval2: number;
	newFruitsInterval3: number;
	newFruitsInterval4: number;
	newBombsInterval: number;
	newHeartsInterval: number;
	player: Player;
	topBar: Rect;
	playerHealth: Health[];
	scoreText: Text;
	scoreValue: Text;
	score: number;
	floor: Rect;
	fruits: Fruit[];
	bombs: Bomb[];
	hearts: Heart[];

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
		this.playerHealth = [];
		this.fruits = [];
		this.bombs = [];
		this.hearts = [];

		for (let i = 0; i < 3; i++) {
			this.playerHealth.push(new Health(this.tempCanvas));
		}

		this.score = 0;
		this.scoreText = new Text(this.tempContext, 180, 25, this.score);
		this.scoreValue = new Text(this.tempContext, 180, 50, this.score);
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
		clearInterval(this.newFruitsInterval2);
		clearInterval(this.newFruitsInterval3);
		clearInterval(this.newFruitsInterval4);
		clearInterval(this.newBombsInterval);
		clearInterval(this.newHeartsInterval);
		const response = confirm("Fim de jogo! Gostaria de jogar novamente?");
		if (response) {
			this.fruits = [];
			this.bombs = [];
			this.hearts = [];
			Game.droppedFruits = 0;
			Health.id = 0;
			clearInterval(this.gameInterval);
			clearInterval(this.newFruitsInterval);
			clearInterval(this.newFruitsInterval2);
			clearInterval(this.newFruitsInterval3);
			clearInterval(this.newFruitsInterval4);
			clearInterval(this.newBombsInterval);
			clearInterval(this.newHeartsInterval);

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
				if (Game.droppedFruits < this.playerHealth.length) {
					const currentHealth =
						this.playerHealth.length - 1 - Game.droppedFruits;
					this.playerHealth[currentHealth].updateImage(
						"./assets/heart-empty.png"
					);
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
		this.bombs = this.bombs.filter(bomb => bomb.wasDropped !== true);
	}

	getHearts(): void {
		this.hearts.forEach(heart => {
			const colision = checkColision(this.player, heart);
			if (colision) {
				this.hearts = this.hearts.filter(h => h !== heart);
				if (Game.droppedFruits > 0) {
					const currentHealth = this.playerHealth.length - Game.droppedFruits;
					this.playerHealth[currentHealth].updateImage("./assets/heart.png");
					Game.droppedFruits -= 1;
				}
			}
		});
	}

	dropHearts(): void {
		this.hearts = this.hearts.filter(heart => heart.wasDropped !== true);
	}

	updateStates(): void {
		this.getFruits();
		this.dropFruits();
		this.getBombs();
		this.dropBombs();
		this.getHearts();
		this.dropHearts();
	}

	renderGame(): void {
		this.clearScreen(this.tempContext, this.tempCanvas);
		this.player.draw();
		this.topBar.draw();
		this.playerHealth.forEach(health => health.draw());
		this.scoreText.draw("text", this.score);
		this.scoreValue.draw("value", this.score);
		this.floor.draw();
		this.fruits.forEach(fruit => fruit.move());
		this.fruits.forEach(fruit => fruit.draw());
		this.bombs.forEach(bomb => bomb.move());
		this.bombs.forEach(bomb => bomb.draw());
		this.hearts.forEach(heart => heart.move());
		this.hearts.forEach(heart => heart.draw());
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
		this.newFruitsInterval2 = setInterval(
			() => this.fruits.push(new Fruit(this.tempCanvas)),
			9333
		);
		this.newFruitsInterval3 = setInterval(
			() => this.fruits.push(new Fruit(this.tempCanvas)),
			21115
		);
		this.newFruitsInterval3 = setInterval(
			() => this.fruits.push(new Fruit(this.tempCanvas)),
			43219
		);
		this.newBombsInterval = setInterval(
			() => this.bombs.push(new Bomb(this.tempCanvas)),
			randomValue(9700, 15000)
		);
		this.newHeartsInterval = setInterval(
			() => this.hearts.push(new Heart(this.tempCanvas)),
			34567
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

	keyUp(event: KeyboardEvent): void {
		if (event.code === "KeyD" || event.code === "ArrowRight") {
			this.player.move("stop");
		}
		if (event.code === "KeyA" || event.code === "ArrowLeft") {
			this.player.move("stop");
		}
	}

	mouseClicked(): void {
		clearInterval(this.gameInterval);
		clearInterval(this.newFruitsInterval);
		clearInterval(this.newFruitsInterval2);
		clearInterval(this.newFruitsInterval3);
		clearInterval(this.newFruitsInterval3);
		clearInterval(this.newBombsInterval);
		clearInterval(this.newHeartsInterval);
		Game.droppedFruits = 0;
		Health.id = 0;
		this.fruits = [];
		this.bombs = [];
		this.hearts = [];
		this.start();
	}
}
