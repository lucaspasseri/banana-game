import Sprite from "./Sprite";

export default class Fruit extends Sprite {
	y: number;
	outOfScreen: boolean;

	constructor(canvas: HTMLCanvasElement, src: string) {
		super(canvas.getContext("2d"), canvas.width / 2 - 20, 0, 30, 30, src);
	}

	move(): void {
		if (this.y < 600) {
			this.y += 2;
		}

		if (this.y > 590) {
			this.outOfScreen = true; ////// TENTAR DESTRUIR A INSTANCIA QUANDO outOfScreen for true???!!!!
		}
	}
}
