/* eslint-disable no-undef */
import { incrementLetter } from "../util";

test("should increment 5 step from C", () =>
  expect(incrementLetter("C", 5)).toBe("H"));
test("should increment 11 step from A", () =>
  expect(incrementLetter("A", 11)).toBe("L"));
test("should increment to match letter type", () =>
  expect(incrementLetter("c", 5)).toBe("h"));
