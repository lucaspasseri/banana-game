import Fruit from "../Fruit";
import Player from "../Player";

export default function checkColision(player: Player, fruit: Fruit): boolean {
	const playerY0 = player.y;
	const playerY1 = player.y + player.height;
	const fruitY0 = fruit.y;
	const fruitY1 = fruit.y + fruit.height;

	const verticalIntersection =
		(fruitY0 >= playerY0 && fruitY0 <= playerY1) ||
		(fruitY1 >= playerY0 && fruitY1 <= playerY1);

	const playerX0 = player.x;
	const playerX1 = player.x + player.width;
	const fruitX0 = fruit.x;
	const fruitX1 = fruit.x + fruit.width;

	const horizontalIntersection =
		(fruitX0 >= playerX0 && fruitX0 <= playerX1) ||
		(fruitX1 >= playerX0 && fruitX1 <= playerX1) ||
		(fruitX0 <= playerX0 && fruitX1 >= playerX1);

	const colision = verticalIntersection && horizontalIntersection;

	return colision;
}
