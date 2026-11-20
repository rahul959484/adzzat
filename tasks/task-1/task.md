# Fix Invoice Calculation

**Type:** language-driven  
**Environment:** Node.js 22, terminal  
**Difficulty:** Easy  
**Difficulty note:** The function is small; the main reasoning is applying quantity and tax consistently and handling invalid input.

## Statement

Fix `starter/invoice.js` so that `calculateInvoice(items, taxRate)` returns the correct invoice total.

An item has:
- `price`: a positive number
- `quantity`: a whole number greater than zero

The total must include each item's price multiplied by its quantity, then add the tax percentage supplied by `taxRate`. Round the final result to two decimal places.

Example:

```js
calculateInvoice([
  { price: 10, quantity: 2 },
  { price: 5.5, quantity: 1 }
], 10)
// 28.05
```

For empty or invalid input, return `0`.

## Expected Behavior

- Multiple items are all included
- Quantity affects the result
- Tax is applied once to the subtotal
- Output is rounded to two decimal places
- Empty and invalid input return `0`
