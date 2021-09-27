import randomValue from "./utils/randomHelper";
import Sprite from "./Sprite";

export default class Bomb extends Sprite {
	wasDropped: boolean;
	velocity: number;

	constructor(canvas: HTMLCanvasElement) {
		const bombData = [
			{
				name: "bomb",
				src: "./assets/bomb.png",
				width: 25,
				height: 35,
			},
		];

		const { src, width, height } = bombData[0];
		const randomPosition = randomValue(0, canvas.width - width);
		//prettier-ignore
		super(canvas.getContext("2d"), randomPosition, -height, width, height, src);
		this.velocity = 5;
	}

	move(): void {
		if (this.y < 545) {
			this.y += this.velocity;
		}

		if (this.y > 540) {
			this.wasDropped = true;
		}
	}
}
