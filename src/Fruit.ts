import Sprite from "./Sprite";

export default class Fruit extends Sprite {
	y: number;
	outOfScreen: boolean;

	constructor(
		canvas: HTMLCanvasElement,
		src: string
	) {
		super(
			canvas.getContext("2d"),
			canvas.width/2 - 20,
			0,
			src,
			30,
			30
		);
	}

	move(): void {
		if(this.y < 600) {
			this.y += 2;
		}

		if( this.y > 590) {
			this.outOfScreen = true;
		}
	}
}