import randomValue from "./Utils/randomHelper";
import Sprite from "./Sprite";

export default class Fruit extends Sprite {
	y: number;
	outOfScreen: boolean;

	constructor(canvas: HTMLCanvasElement) {
		const fruitsData = [
			{ name: "banana", src: "../assets/banana.png", width: 30, height: 30 },
			{ name: "orange", src: "../assets/orange.png", width: 30, height: 30 },
			{ name: "apple", src: "../assets/red-apple.png", width: 30, height: 30 },
			//prettier-ignore
			{ name: "strawberry", src: "../assets/strawberry.png", width: 20, height: 20 },
			//prettier-ignore
			{ name: "watermelon", src: "../assets/watermelon.png", width: 40, height: 40 },
		];
		const randomFruit = randomValue(0, fruitsData.length - 1);
		const { src, width, height } = fruitsData[randomFruit];
		const randomPosition = randomValue(0, canvas.width - width);
		//prettier-ignore
		super(canvas.getContext("2d"), randomPosition, -height, width, height, src);
	}

	move(): void {
		if (this.y < 545) {
			this.y += 2;
		}

		if (this.y > 540) {
			this.outOfScreen = true; ////// TENTAR DESTRUIR A INSTANCIA QUANDO outOfScreen for true???!!
		}
	}
}
