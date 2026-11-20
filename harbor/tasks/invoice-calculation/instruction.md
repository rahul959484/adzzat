# Fix Invoice Calculation

Fix `/app/invoice.js` so that `calculateInvoice(items, taxRate)` returns the correct invoice total.

Each item has a positive numeric `price` and a whole-number `quantity` greater than zero. Multiply each item's price by its quantity, sum the results, apply the tax percentage once, and round the final total to two decimal places. Return `0` for empty or invalid input.

Example: two items `{ price: 10, quantity: 2 }` and `{ price: 5.5, quantity: 1 }` with a tax rate of `10` should return `28.05`.
