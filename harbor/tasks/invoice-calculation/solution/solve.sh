#!/bin/sh
cat > /app/invoice.js <<'EOF'
function calculateInvoice(items, taxRate) {
  if (!Array.isArray(items) || items.length === 0) return 0;
  if (typeof taxRate !== "number" || !Number.isFinite(taxRate) || taxRate < 0) return 0;

  let subtotal = 0;
  for (const item of items) {
    if (!item || typeof item.price !== "number" || !Number.isFinite(item.price) || item.price <= 0) return 0;
    if (!Number.isInteger(item.quantity) || item.quantity <= 0) return 0;
    subtotal += item.price * item.quantity;
  }

  return Number((subtotal * (1 + taxRate / 100)).toFixed(2));
}

module.exports = { calculateInvoice };
EOF
