// Starter code for the Harbor task. The agent should fix this function.
function calculateInvoice(items, taxRate) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return Number(subtotal.toFixed(2));
}

module.exports = { calculateInvoice };
