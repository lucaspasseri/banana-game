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
		src: string,
		width: number,
		height: number
	) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.src = src;
		this.width = width;
		this.height = height;
	}

	draw(): void{
		this.image = new Image();
		this.image.onload = () => {
			this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
		};
		this.image.src = this.src;	
	}

	/* loadImage(src: string): Promise<unknown> {
		const image = new Image();
		const promise = new Promise((resolve, reject) => {
			image.onload = () => resolve(image);
			image.onerror = reject;
		});
		this.image.src = src;
		return promise;
	} */
}