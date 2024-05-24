# Inventory Update

## Overview
The Inventory Update function is designed to compare and update an existing inventory stored in a 2D array against a second 2D array representing a fresh delivery. The function updates the quantities of existing inventory items and adds new items as necessary. The resulting inventory array is returned in alphabetical order by item name.

## Features
- Compares and updates existing inventory quantities.
- Adds new items and quantities if they do not exist in the current inventory.
- Returns the updated inventory array sorted alphabetically by item name.

## Function Usage
To use the function, provide two 2D arrays as arguments: the current inventory and the new delivery. The function will return a 2D array representing the updated inventory.

### Example
```javascript
const updateInventory = require('update-inventory');

const currentInventory = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newDelivery = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

const updatedInventory = updateInventory(currentInventory, newDelivery);
console.log(updatedInventory);
// Output: [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
```

## Implementation Details
1. The function accepts two 2D arrays: `arr1` (current inventory) and `arr2` (new delivery).
2. It iterates through `arr2` to update quantities in `arr1`. If an item from `arr2` does not exist in `arr1`, it is added to `arr1`.
3. The function ensures that the resulting inventory array is sorted alphabetically by item name before returning it.

## Test Cases
- The function should return an array.
- The updated inventory should contain all items from both the current inventory and the new delivery.
- Quantities of existing items should be correctly updated.
- New items should be added with their respective quantities.
- The final array should be sorted alphabetically by item name.

## Conclusion
The Inventory Update function provides an efficient way to manage and update inventory records by combining existing data with new deliveries. It ensures that the inventory is accurately updated and sorted for easy reference.