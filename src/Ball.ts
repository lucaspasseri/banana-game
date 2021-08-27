export default class Ball {
	context;
	x;
	y;
	radius;
	color;
  
	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		radius: number,
		color: string
	) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}
  
	draw(): void {
		this.context.beginPath();
		this.context.fillStyle = this.color;
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.context.fill();
	}
}