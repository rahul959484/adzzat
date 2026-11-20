const path = require("path");

const target = process.env.TARGET_FILE || "../starter/invoice.js";
const { calculateInvoice } = require(path.resolve(__dirname, target));

describe("calculateInvoice", () => {
  test("calculates quantity and tax for a normal invoice", () => {
    expect(calculateInvoice([
      { price: 10, quantity: 2 },
      { price: 5.5, quantity: 1 }
    ], 10)).toBe(28.05);
  });

  test("calculates a second normal case", () => {
    expect(calculateInvoice([
      { price: 40, quantity: 1 },
      { price: 12.25, quantity: 2 }
    ], 5)).toBe(67.73);
  });

  test("rounds a fractional result to two decimal places", () => {
    expect(calculateInvoice([{ price: 19.99, quantity: 3 }], 8.25)).toBe(64.92);
  });

  test("returns zero for empty input", () => {
    expect(calculateInvoice([], 10)).toBe(0);
  });

  test("rejects invalid items and tax values", () => {
    expect(calculateInvoice([{ price: 10, quantity: 0 }], 10)).toBe(0);
    expect(calculateInvoice([{ price: -5, quantity: 1 }], 10)).toBe(0);
    expect(calculateInvoice([{ price: 10, quantity: 1 }], -5)).toBe(0);
  });
});
