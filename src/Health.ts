import Sprite from "./Sprite";

export default class Health extends Sprite {
	x: number;
	static id = 0;

	constructor(canvas: HTMLCanvasElement) {
		const healthWidth = 40;
		const healthHeight = 40;
		const x = 12 + Health.id * 42;
		const y = 12;
		const imageSrc = "./assets/heart.png";
		super(canvas.getContext("2d"), x, y, healthWidth, healthHeight, imageSrc);
		Health.id += 1;
	}
}
