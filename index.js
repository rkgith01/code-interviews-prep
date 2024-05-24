function sym(...args) {
  // Remove duplicates from each array
  console.log(args)
  const uniqueArrays = args.map((arr) => [...new Set(arr)]);
  // reduce to find symmetric difference
  const result = uniqueArrays.reduce((acc, arr) => {
    // console.log({acc})
    const checkItems = acc
      .filter((item) => !arr.includes(item))
      .concat(arr.filter((item) => !acc.includes(item)));
    // console.log({checkItems});
    return checkItems;
  }, []);
  // console.log({result});
  return result;
}
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
