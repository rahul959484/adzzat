// Starter code: fix this function.
function calculateInvoice(items, taxRate) {
  // BUG: this implementation is incomplete.
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return Number(subtotal.toFixed(2));
}

module.exports = { calculateInvoice };
