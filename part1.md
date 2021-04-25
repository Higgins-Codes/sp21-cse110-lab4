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

12. Object notation
    1.  `student.name`
    2.  `student["Grad Year"]`
    3.  `student.greeting()`
    4.  `student["Favorite Teacher"].name`
    5.  `student.courseLoad[0]`

13. arithmetic
    1. a: 32
       1. converted `2` to a string and concatenated
    2. b: 1
       1. converted `3` to a number and computed the math
    3. c: 3
       1. converted `null` to a `0` and computed the math
    4. d: 3null
       1. converted `null` to ` ` and concatenated nothing
    5. e: 4
       1. converted `true` to `1` and computed the math
    6. f: 0
       1. converted `false` to `0` and converted `null` to ` ` and computed the math to just `0`
    7. g: 3undefined
       1. converted `undefined` to a string
    8. h: NaN
       1. attempted to compute math on `undefined` but this produced an invalid result

14. comparison
    1. a: true
       1. converted `2` to a number
    2. b: false
       1. compared the values as a string according to unicode/ascii values
    3. c: true
       1. converted string `2` into a number
    4. d: false
       1. compared true value without converting
    5. e: false
       1. converted `true` to a number and compared 
    6. f: true
       1. converted `Boolean(2)` to `true` and compared using strict equality checking

15. `==` is for general equality checking and will attempt to convert the right operand to the same type as the left operand. `===` is for strict equality checking and doesn't do any type checking

16. [part1b-question16.js](part1b-question16.js)
```JavaScript
let statistics = {
    redCars: 21,
    bluecars: 35,
    greenCars: 12,
    raceCars: 5,
    blackCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const val in statistics) {
    if (val.charAt(0).toLowerCase() == 'r' || statistics[val] % 2 == 1) {
        console.log(`${val}: ${statistics[val]}`);
    }
}
```

17. result: `(3) [2, 4, 6]`
    1.  `modifyArray` is the first function call
    2.  for each element in the array, call the `doSomething` function and pass that into a new array

18. [part1b-question18.js](part1b-question18.js) 
```JavaScript
function printTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(printTime, 100);
```

19. result: 
```JavaScript
1
4
2
3
```