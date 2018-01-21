/* Scope and Operators */
/* Lesson 2 - Hands-On */

/*  Description:

    Leverage your knowledge of the JavaScript programming language
    to write three functions that take in two parameters, with one
    of the parameters being a default parameter.

        Function 1: This function should return the sum of all numbers.
        Function 2: This function should return the quotient of all numbers.
        Function 3: This function should return the average of all numbers.

    Example:

        With Default Parameter of 20:

            addNumbers(1);
        
        should return 21.
*/

function addNumbers(a, b = 20) {
  return a + b;
}
console.log(addNumbers(1,30));      /* expected output = 31 */
console.log(addNumbers(1));         /* expected output = 21 */

function divideNumbers(a, b = 20) {
  return a / b;
}
console.log(divideNumbers(40,10));  /* expected output = 4 */
console.log(divideNumbers(1));      /* expected output = 0.05 */

function averageNumbers(a, b = 20) {
  return (a + b) / 2;
}
console.log(averageNumbers(10,30)); /* expected output = 20 */
console.log(averageNumbers(1));     /* expected output = 10.5 */
