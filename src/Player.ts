import Sprite from "./Sprite";

export default class Player extends Sprite {
	x: number;

	constructor(canvas: HTMLCanvasElement) {
		const playerWidth = 40;
		const playerHeight = 60;
		const floorHeight = 20;
		const imageSrc = "../assets/alien.png";
		super(
			canvas.getContext("2d"),
			canvas.width / 2 - playerWidth / 2,
			canvas.height - playerHeight - floorHeight,
			playerWidth,
			playerHeight,
			imageSrc
		);
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
