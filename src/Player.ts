import Sprite from "./Sprite";

export default class Player extends Sprite {
	x: number;

	constructor(
		canvas: HTMLCanvasElement
	) {
		super(
			canvas.getContext("2d"),
			canvas.width/2 - 20,
			canvas.height-70,
			"../assets/alien.png",
			40,
			50
		);
	}

	moveRigth(): void {
		if(this.x < 260) this.x += 5;
	}

	moveLeft(): void {
		if(this.x > 0) this.x -= 5;
	}
}