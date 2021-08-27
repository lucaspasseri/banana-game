export default class Game {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;

	constructor(canvas: HTMLCanvasElement){
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.canvas.height = 560;
		this.canvas.width = 300;
	}

	drawCircle(
		xPosition: number,
		yPosition: number,
		radius: number,
		color: string): void{
		this.context.beginPath();
		this.context.arc(xPosition, yPosition, radius, 0, 2 * Math.PI);
		this.context.fillStyle = color;
		this.context.fill();
	}

	start(): void{
		this.drawCircle(0, 0, 20, "#00FF00");
		this.drawCircle(300, 0, 20, "#00FF00");
		this.drawCircle(0, 560, 20, "#00FF00");
		this.drawCircle(300, 560, 20, "#00FF00");
		this.drawCircle(150, 280, 20, "#00FF00");
	}

	mouseMoved(event: MouseEvent): void{
		const xPositionMouse = event.clientX;
		const yPositionMouse = event.clientY;
		const xPositionCanvas = this.canvas.getBoundingClientRect().left;
		const yPositionCanvas = this.canvas.getBoundingClientRect().top;
	
		this.drawCircle( 
			xPositionMouse - xPositionCanvas,
			yPositionMouse - yPositionCanvas,
			10,
			"#0000FF"
		);
	}

	mouseClicked(event: MouseEvent): void{
		const xPositionMouse = event.clientX;
		const yPositionMouse = event.clientY;
		const xPositionCanvas = this.canvas.getBoundingClientRect().left;
		const yPositionCanvas = this.canvas.getBoundingClientRect().top;
	
		this.drawCircle( 
			xPositionMouse - xPositionCanvas,
			yPositionMouse - yPositionCanvas,
			20,
			"#FF0000"
		);
	}
}