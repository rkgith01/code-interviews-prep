# Symmetric Difference Calculator

## Overview
The Symmetric Difference Calculator is a JavaScript function designed to compute the symmetric difference of two or more sets. In mathematics, the symmetric difference (denoted as △ or ⊕) of two sets is the set of elements that are present in either of the sets but not in both. For example, given sets A = {1, 2, 3} and B = {2, 3, 4}, the symmetric difference A △ B = {1, 4}.

## Features
- Computes the symmetric difference between two or more arrays.
- Ensures the result contains only unique values, removing any duplicates.

## Symmetric Difference Explained
The symmetric difference is a binary operation, which means it is performed on two elements at a time. To find the symmetric difference among multiple sets, you need to perform the operation sequentially. For example, for sets A = {1, 2, 3}, B = {2, 3, 4}, and C = {2, 3}, the symmetric difference is computed as follows:
1. Compute A △ B: {1, 2, 3} △ {2, 3, 4} = {1, 4}
2. Compute the result with C: {1, 4} △ {2, 3} = {1, 2, 3, 4}

## Function Usage
To use the function, provide two or more arrays as arguments. The function will return an array containing the symmetric difference of the input arrays.

### Example
```javascript
const symmetricDifference = require('symmetric-difference');

const A = [1, 2, 3];
const B = [2, 3, 4];
const C = [2, 3];

const result = symmetricDifference(A, B, C);
console.log(result); 
// Output: [1, 2, 3, 4]
```

## Implementation Details
1. The function accepts a variable number of arrays.
2. It computes the symmetric difference by iterating through each array and applying the symmetric difference operation sequentially.
3. The final result is an array of unique elements representing the symmetric difference of all input arrays.

## Conclusion
The Symmetric Difference Calculator is a useful tool for finding the symmetric difference between multiple sets. By ensuring that the result contains only unique values, it simplifies the process of performing this mathematical operation in JavaScript.