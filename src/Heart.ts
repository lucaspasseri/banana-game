import randomValue from "./utils/randomHelper";
import Sprite from "./Sprite";

export default class Heart extends Sprite {
	velocity: number;
	wasDropped: boolean;

	constructor(canvas: HTMLCanvasElement) {
		const heartWidth = 50;
		const heartHeight = 50;
		const randomPosition = randomValue(0, canvas.width - heartWidth);
		const y = -heartHeight;
		const imageSrc = "./assets/heart.png";
		super(
			canvas.getContext("2d"),
			randomPosition,
			y,
			heartWidth,
			heartHeight,
			imageSrc
		);
		this.velocity = 6;
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
