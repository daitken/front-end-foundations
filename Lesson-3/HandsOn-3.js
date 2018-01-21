/* Document Object Model and Decision Making */
/* Lesson 3 - Hands-On: Working with the DOM */

/*  Description:


*/

let highSchoolGrade = 11;
let yourGrade;

switch (highSchoolGrade) {
    case 9:
        yourGrade = "Freshman";
        break;
    case 10:
        yourGrade = "Sophomore";
        break;
    case 11:
        yourGrade = "Junior";
        break;
    case 12:
        yourGrade = "Senior";
        break;
    default:
        yourGrade = "Invalid";
}

console.log(yourGrade);
