export default function randomValue(
	lowerLimit: number,
	upperLimit: number
): number {
	const randomValue = Math.floor((upperLimit - lowerLimit + 1) * Math.random());
	return randomValue;
}
