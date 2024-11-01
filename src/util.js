export function getRandomNumber(min, max) {
  if (min > max) throw new Error("min number must be less than max number");

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function toCoordinateArr(coordinate) {
  const [x, y] = coordinate.match(/[A-Z]|\d+/g);
  return [x, parseInt(y)];
}

export function incrementLetter(letter, num) {
  return String.fromCharCode(letter.charCodeAt(0) + num);
}

export function getRandomCoordinate() {
  const x = String.fromCharCode(getRandomNumber(65, 74));
  const y = getRandomNumber(1, 10);

  return x + y;
}
