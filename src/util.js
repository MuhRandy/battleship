export function getRandomNumber(min, max) {
  if (min > max) throw new Error("min number must be less than max number");

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function toCoordinateArr(coordinate) {
  const [x, y] = coordinate.match(/[A-Z]|\d+/g);
  return [x, parseInt(y)];
}
