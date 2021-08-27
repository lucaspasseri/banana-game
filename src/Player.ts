import Sprite from "./Sprite";
import playerSprite from "../assets/alien.png";

export default class Player extends Sprite {
	x: number;

	constructor(
		canvas: HTMLCanvasElement
	) {
		super(
			canvas.getContext("2d"),
			canvas.width/2,
			canvas.height-40,
			playerSprite
		);
	}
	
	moveTo(x: number): void {
		this.x = x;
	}
}