import Sprite from "./Sprite";

export default class Player extends Sprite {
	velocity: number;

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
		this.velocity = 6;
	}

	move(direction: string): void {
		if (direction === "left") {
			this.velocity = 6;
			if (this.x > 0) this.x -= this.velocity;
		}

		if (direction === "right") {
			this.velocity = 6;
			if (this.x < 260) this.x += this.velocity;
		}

		if (direction === "stop") {
			this.velocity = 0;
		}
	}
}
