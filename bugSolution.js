function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  // ... rest of the function that will not run if either a or b is null
  return a + b; //Example operation
}
console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(null, null)); // Output: null