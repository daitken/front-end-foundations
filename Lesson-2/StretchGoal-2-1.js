/* Scope and Operators */
/* Lesson 2 - Stretch Goal #1 */

/*  Description:

    Leverage your knowledge of the JavaScript programming language
    to write the three previous functions as arrow functions. Each
    of the functions should take in two parameters, and NO default
    parameters are needed.

        Function 1: This function should return the sum of all numbers.
        Function 2: This function should return the quotient of all numbers.
        Function 3: This function should return the average of all numbers.
*/

/* function addNumbers(a, b) {
  return a + b;
} */

let addNumbers = (a,b) => {return a + b};   /* previous function shown above */

console.log(addNumbers(1,30));              /* expected output = 31 */


/* function divideNumbers(a, b) {
  return a / b;
} */

let divideNumbers = (a,b) => {return a / b};    /* previous function shown above */

console.log(divideNumbers(40,10));              /* expected output = 4 */


/* function averageNumbers(a, b) {
  return (a + b) / 2;
} */

let averageNumbers = (a,b) => {return (a + b) /2};  /* previous function shown above */

console.log(averageNumbers(10,30));                 /* expected output = 20 */
