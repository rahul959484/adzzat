function calculateInvoice(items, taxRate) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  let subtotal = 0;

  for (const item of items) {
    if (
      !item ||
      typeof item.price !== "number" ||
      !Number.isFinite(item.price) ||
      item.price <= 0 ||
      typeof item.quantity !== "number" ||
      !Number.isInteger(item.quantity) ||
      item.quantity <= 0
    ) {
      return 0;
    }

    subtotal += item.price * item.quantity;
  }

  if (typeof taxRate !== "number" || !Number.isFinite(taxRate) || taxRate < 0) {
    return 0;
  }

  const total = subtotal * (1 + taxRate / 100);
  return Number(total.toFixed(2));
}

module.exports = { calculateInvoice };
