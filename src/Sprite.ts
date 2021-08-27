export default class Sprite {
	context: CanvasRenderingContext2D;
	x: number;
	y: number;
	image: HTMLImageElement;

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		image: HTMLImageElement
	) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.image = image;
	}

	draw(): void{
		this.context.drawImage(this.image, this.x, this.y);
	}
}