function updateInventory(arr1, arr2) {
  //Map to store the inventory for efficient lookup
  const inventoryMap = new Map(); 

  // Add existing inventory items to the Map
  arr1.forEach(([quantity, item]) => {
    inventoryMap.set(item, quantity);
  });

  // Update the Map with new delivery items
  arr2.forEach(([quantity, item]) => {
    if (inventoryMap.has(item)) {
      inventoryMap.set(item, inventoryMap.get(item) + quantity);
    } else {
      inventoryMap.set(item, quantity);
    }
  });

  // Convert the Map back to an array and sort it
  const updatedInventory = Array.from(inventoryMap)
    .map(([item, quantity]) => [quantity, item])
    .sort((a, b) => a[1].localeCompare(b[1]));

  // Return the updated and sorted inventory
  return updatedInventory;
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
