import { isZero } from "./isZero";

test("0を渡したらtrueになること", () => {
  const result = isZero(0);
  expect(result).toBe(true);
});

test("0以外を渡したらfalseになること", () => {
  for (let i = 1; i <= 10; i++) {
    const result = isZero(i);
    expect(result).toBe(false);
  }
});
