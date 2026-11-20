const { processOrders } = require("/app/orders.js");

describe("processOrders Harbor verifier", () => {
  test("keeps completed valid orders newest first", () => {
    const result = processOrders([
      { id: 1, customer: "Asha", total: 500, status: "completed", createdAt: "2026-01-10T10:00:00Z" },
      { id: 2, customer: "Rahul", total: 300, status: "pending", createdAt: "2026-02-01T10:00:00Z" },
      { id: 3, customer: "Mira", total: 750, status: "completed", createdAt: "2026-02-15T10:00:00Z" }
    ]);
    expect(result.map((order) => order.id)).toEqual([3, 1]);
  });

  test("rejects invalid orders and handles empty or invalid input", () => {
    expect(processOrders([
      { id: 1, customer: " ", total: 100, status: "completed", createdAt: "2026-01-01T00:00:00Z" },
      { id: 2, customer: "Sam", total: 0, status: "completed", createdAt: "2026-01-01T00:00:00Z" },
      { id: 3, customer: "Sam", total: 100, status: "completed", createdAt: "bad-date" }
    ])).toEqual([]);
    expect(processOrders([])).toEqual([]);
    expect(processOrders(null)).toEqual([]);
  });

  test("does not modify the input array", () => {
    const orders = [
      { id: 1, customer: "A", total: 10, status: "completed", createdAt: "2026-01-01T00:00:00Z" },
      { id: 2, customer: "B", total: 20, status: "completed", createdAt: "2026-02-01T00:00:00Z" }
    ];
    const original = JSON.stringify(orders);
    processOrders(orders);
    expect(JSON.stringify(orders)).toBe(original);
  });
});
