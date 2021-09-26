import { promisify } from "util";
export default class Sprite {
	context: CanvasRenderingContext2D;
	x: number;
	y: number;
	width: number;
	height: number;
	image: HTMLImageElement;
	src: string;

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number,
		src: string
	) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.src = src;
		this.image = new Image();
		this.image.src = this.src;
	}

	draw(): void {
		if (this.image.complete) {
			this.context.drawImage(
				this.image,
				this.x,
				this.y,
				this.width,
				this.height
			);
		}
	}
}
