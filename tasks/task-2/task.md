# Process Completed Orders

**Type:** outcome-driven  
**Environment:** Node.js 22, terminal  
**Difficulty:** Easy  
**Difficulty note:** The task uses familiar array filtering and sorting, with a few input-validation cases.

## Statement

Build a program that processes a list of orders and produces a useful list of completed orders.

Given an array of orders, the program should return only valid orders that:
- have status `completed`
- have a non-empty customer name
- have a positive total
- sort by newest `createdAt` value first

Use an array of order objects containing `id`, `customer`, `total`, `status`, and `createdAt`.

The program should handle an empty or invalid input without throwing an error.

## Expected Behavior

- Incomplete and invalid orders are excluded
- Completed orders are sorted newest first
- The original array is not modified
- Empty or invalid input returns an empty array
