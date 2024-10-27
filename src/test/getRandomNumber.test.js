/* eslint-disable no-undef */
import { getRandomNumber } from "../util";

test("Generate random number from 0 to 9", () => {
  for (let i = 0; i < 10; i++) {
    const randomNumber = getRandomNumber(0, 9);

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  }
});
test("Generate random number from 1 to 3", () => {
  for (let i = 0; i < 10; i++) {
    const randomNumber = getRandomNumber(1, 3);

    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(3);
  }
});
test("Generate random number from 200 to 400", () => {
  for (let i = 0; i < 10; i++) {
    const randomNumber = getRandomNumber(200, 400);

    expect(randomNumber).toBeGreaterThanOrEqual(200);
    expect(randomNumber).toBeLessThanOrEqual(400);
  }
});
test("Throw error when min > max", () =>
  expect(() => getRandomNumber(5, 2)).toThrow(
    "min number must be less than max number",
  ));
