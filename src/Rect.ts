export default class Rect {
	context: CanvasRenderingContext2D;
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number,
		color: string
	) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw():void {
		this.context.fillStyle = this.color;
		this.context.fillRect(this.x, this.y, this.width, this.height);
	}
}
