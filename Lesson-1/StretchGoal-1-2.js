/* Introduction to Fron End Foundations */
/* Lesson 1 - Stretch Goal #2 */

/*  Description:

    Leverage your knowledge of the JavaScript programming language
    to create a script that determines if the given age allows the
    attendee to see the movie. There should be four options to this
    program, and each option should console log the appropriate response.
    The options are:

        * Not permitted if under the age of 10
        * Permitted with parent if under the age of 15
        * Permitted with anyone over 18 if under the age of 18
        * Permitted to attend alone if 18 or older.
*/

let age = 15;

if(age >= 18) {
    console.log("Permitted to attend the movie alone");
} else if (age >= 15) {
    console.log("Permitted to attend the movie only if accompanied by someone over 18");
} else if (age > 10 && age < 15) {
    console.log("Permitted to attend the movie if accompanied by a parent");
} else {
    console.log("Not permitted to attend");
}
