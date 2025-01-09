# Null Value Handling in JavaScript Function
This repository demonstrates a common error in JavaScript: improper handling of null values as function parameters.

## The Bug
The `bug.js` file contains a function `foo` that doesn't explicitly handle `null` values.  If either `a` or `b` is `null`, this can lead to unexpected behavior depending on the function's implementation.

## The Solution
The `bugSolution.js` shows a simple way to improve this function by explicitly checking for and handling `null` values at the start.

## How to reproduce:
1. Clone this repo.
2. Run `node bug.js` (or open in a browser if it is client-side)
3. Observe the output. Then try the solution.