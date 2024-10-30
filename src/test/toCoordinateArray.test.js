/* eslint-disable no-undef */
import { toCoordinateArr } from "../util";

test("should return split of string from alphabet and number", () => {
  expect(toCoordinateArr("A2")).toStrictEqual(["A", 2]);
  expect(toCoordinateArr("A10")).toStrictEqual(["A", 10]);
});
test("should return with the correct type [string, number]", () => {
  expect(typeof toCoordinateArr("A5")[0]).toBe("string");
  expect(typeof toCoordinateArr("A5")[1]).toBe("number");
});
test("should return an array with length exactly 2", () =>
  expect(toCoordinateArr("D4")).toHaveLength(2));
