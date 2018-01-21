/* Introduction to Fron End Foundations */
/* Lesson 1 - Hands-On */

/*  Description:

    Leverage your knowledge of the JavaScript programming language
    to write a function:

        * The function totalPrice will calculate the cost of land with
          a given size (sqEdge) and price per square foot pricePerSqFt.
*/

function totalPrice(sqEdge, pricePerSqFt) {
    return (sqEdge ** 2) * pricePerSqFt;
}
console.log(totalPrice(10, 100));   /* return 10000 */