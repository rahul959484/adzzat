function processOrders(orders) {
  if (!Array.isArray(orders)) return [];
  return orders.filter((order) => order.status === "completed");
}
module.exports = { processOrders };
