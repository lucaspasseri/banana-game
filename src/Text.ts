export default class Text {
	context: CanvasRenderingContext2D;
	x: number;
	y: number;
	font: string;
	fontSize: number;
	fontColor: string;
	text: string;

	constructor(
		context: CanvasRenderingContext2D,
		x: number,
		y: number,
		value: number
	) {
		const font = "Arial";
		const fontSize = 20;
		const fontColor = "#fff";
		const text = `Score: ${value}`;

		this.context = context;
		this.x = x;
		this.y = y;
		this.font = font;
		this.fontSize = fontSize;
		this.fontColor = fontColor;
		this.text = text;
	}

	draw(type: string, value: number): void {
		this.context.font = `${this.fontSize}px ${this.font}`;
		this.context.fillStyle = this.fontColor;
		if (type === "text") {
			this.text = "Score:";
		}
		if (type === "value") {
			this.text = `${value}`;
		}

		this.context.fillText(this.text, this.x, this.y);
	}
}
