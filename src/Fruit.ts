import randomValue from "./utils/randomHelper";
import Sprite from "./Sprite";

export default class Fruit extends Sprite {
	fruitIsOutOfLimits: boolean;
	points: number;
	banana: boolean;

	constructor(canvas: HTMLCanvasElement) {
		const fruitsData = [
			{
				name: "banana",
				src: "./assets/banana.png",
				width: 25,
				height: 35,
				points: 0,
			},
			{
				name: "orange",
				src: "../assets/orange.png",
				width: 30,
				height: 30,
				points: 5,
			},
			{
				name: "apple",
				src: "../assets/red-apple.png",
				width: 30,
				height: 30,
				points: 10,
			},
			{
				name: "strawberry",
				src: "../assets/strawberry.png",
				width: 20,
				height: 20,
				points: 30,
			},
			{
				name: "watermelon",
				src: "../assets/watermelon.png",
				width: 50,
				height: 40,
				points: 20,
			},
		];
		const randomFruit = randomValue(0, fruitsData.length - 1);
		const { src, width, height, points, name } = fruitsData[randomFruit];
		const randomPosition = randomValue(0, canvas.width - width);
		//prettier-ignore
		super(canvas.getContext("2d"), randomPosition, -height, width, height, src);
		if (name === "banana") {
			this.banana = true;
		}
		this.points = points;
	}

	move(): void {
		if (this.y < 545) {
			this.y += 1;
		}

		if (this.y > 540) {
			this.fruitIsOutOfLimits = true;
		}
	}
}
