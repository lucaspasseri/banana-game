import Fruit from "../Fruit";
import Player from "../Player";
import Bomb from "../Bomb";
import Heart from "../Heart";

export default function checkColision(
	player: Player,
	fallingObject: Fruit | Bomb | Heart
): boolean {
	const playerY0 = player.y;
	const playerY1 = player.y + player.height;
	const fallingObjectY0 = fallingObject.y;
	const fallingObjectY1 = fallingObject.y + fallingObject.height;

	const verticalIntersection =
		(fallingObjectY0 >= playerY0 && fallingObjectY0 <= playerY1) ||
		(fallingObjectY1 >= playerY0 && fallingObjectY1 <= playerY1);

	const playerX0 = player.x;
	const playerX1 = player.x + player.width;
	const fallingObjectX0 = fallingObject.x;
	const fallingObjectX1 = fallingObject.x + fallingObject.width;

	const horizontalIntersection =
		(fallingObjectX0 >= playerX0 && fallingObjectX0 <= playerX1) ||
		(fallingObjectX1 >= playerX0 && fallingObjectX1 <= playerX1) ||
		(fallingObjectX0 <= playerX0 && fallingObjectX1 >= playerX1);

	const colision = verticalIntersection && horizontalIntersection;

	return colision;
}
