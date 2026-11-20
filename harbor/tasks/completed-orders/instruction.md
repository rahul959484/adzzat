# Process Completed Orders

Complete `/app/orders.js` so the program returns a useful list of completed orders.

Only include orders that are completed and have a non-empty customer name, a positive numeric total, and a valid `createdAt` date. The result should list the newest orders first. Handle empty or invalid input without throwing an error, and do not change the original input array.

Each order has `id`, `customer`, `total`, `status`, and `createdAt` fields. Export a function named `processOrders`.
