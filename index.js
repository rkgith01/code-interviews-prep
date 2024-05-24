function sym(...args) {
  console.log(...args)
  // Remove duplicates from each array
  const uniqueArrays = args.map(arr => [...new Set(arr)]); 
  console.log(uniqueArrays)
  // Initialize an array to store the symmetric difference
  let result = []; 
  // Iterate through each array
  for (const arr of uniqueArrays) { 
      // Iterate through each number in the array
    for (const num of arr) { 
      // If the number is already in the result array, remove it
      if (result.includes(num)) { 
        result = result.filter(item => item !== num);
        // Otherwise, add it to the result array
      } else { 
        result.push(num);
      }
    }
  }
  // Return the final symmetric difference
  return result; 
}

// sym([1, 2, 3], [5, 2, 1, 4]);
console.log(sym([1, 2, 3], [5, 2, 1, 4]))