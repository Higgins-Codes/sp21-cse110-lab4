# CSE110 Lab4: Part 1

## Part 1a. Variables and Scoping

1. prints: `values added: 20`
2. prints: `final result: 20`

   * these don't run into errors because `var` allows variables to be hoisted and used without problems anywhere inside the function

3. prints: `values added: 20`
4. prints: `ERROR`

   * prints error because `let` has block scope which means that it won't be valid outside of the block in which it was defined

5. prints: `ERROR`
   
   * `const` cannot be reassigned so its value can never change.

6. prints: `ERROR`

   * `const` is similar to `let` in block scope. only valid in the same block it is declared in

## Part 1b. Code Blocks and Scoping

1. prints: `3`
   * iterates the `for loop` 3 times, once for each item in the array `prices` that was passed in as an argument.
   * was readable because the variable was hoisted when declared with `var`

2. prints: `150`
   * overwrites the value of `discountedPrice` on each iteration of the `for loop`
   * only the last value of `prices` is going to be stored in `discountedPrice`
   * the last value = `300 * (1 - .5) = 150`
   * was readable because the variable was hoisted when declared with `var`

3. prints: `150`
   * `discountedPrice` is overwritten as in question 2
   * `finalPrice = Math.round(150 * 100)/100;` -> `Math.round(15000)/100` -> `15000/100` -> `150`
   * was readable because the variable was hoisted when declared with `var`

4. returns: `[ 50, 100, 150 ]`
   * returns the array  `prices` which has now been pushed several, calculated values

5. prints: `ERROR`
   * `i` was declared inside the `for` block but was called outside of the block which means `i` no longer exists when it reaches `console.log`

6. prints: `ERROR` 
   * `discountedPrice` was declared inside the `for` block but was called outside of the block which means `discountedPrice` no longer exists when it reaches `console.log`

7. prints: `150`
   * because `discounted` was initialized and called in the same block, this code is valid

8. returns: `[ 50, 100, 150 ]`
   * returns the array  `prices` which has now been pushed several, calculated values

9. prints `ERROR`
   * same as question 5. `i` was called outside of its scope

10. prints `3`
   * works because `const` was re-initialized each iteration of the `for` block

11. returns: `[ 50, 100, 150 ]`
   * returns the array  `prices` which has now been pushed several, calculated values
   * since line 7 works appropriately, the whole code works appropriately and returns the appropriate values