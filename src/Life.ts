import Sprite from "./Sprite";

export default class Life extends Sprite {
	x: number;
	static id = 1;

	constructor(canvas: HTMLCanvasElement) {
		const lifeWidth = 40;
		const lifeHeight = 40;
		const x = 12 + (Life.id % 3) * 42;
		const y = 12;
		const imageSrc = "./assets/heart.png";
		super(canvas.getContext("2d"), x, y, lifeWidth, lifeHeight, imageSrc);
		Life.id += 1;
	}

	move(direction: string): void {
		if (direction === "left") {
			if (this.x > 0) this.x -= 5;
		}

		if (direction === "right") {
			if (this.x < 260) this.x += 5;
		}
	}
}
