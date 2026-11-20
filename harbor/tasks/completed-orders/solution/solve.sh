#!/bin/sh
cat > /app/orders.js <<'EOF'
function processOrders(orders) {
  if (!Array.isArray(orders)) return [];

  const validOrders = orders.filter((order) => {
    return order &&
      order.status === "completed" &&
      typeof order.customer === "string" && order.customer.trim().length > 0 &&
      typeof order.total === "number" && Number.isFinite(order.total) && order.total > 0 &&
      typeof order.createdAt === "string" && !Number.isNaN(Date.parse(order.createdAt));
  });

  return validOrders.slice().sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

module.exports = { processOrders };
EOF
