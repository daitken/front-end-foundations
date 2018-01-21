/* Scope and Operators */
/* Lesson 2 - Stretch Goal #2 */

/*  Description:

    Leverage your knowledge of the JavaScript programming language to
    create TWO JavaScript objects using the starter code below.
    
        let newProduct = {};

        let wishList = {};
    
    Your objects must have at least THREE properties and ONE method each 
    using the "this" keyword.
*/

let newProduct = {
    productName: "Laptop",
    productCost: 1000,
    companyDiscount: 10,    /* 10% */
    companyPrice: function() {
        return this.productCost * (1 - (this.companyDiscount / 100));
    }
};
console.log(newProduct.companyPrice());     /* expected output = 900 */


let wishList = {
        wishOne: "Be healthy and active as I get older",
        wishTwo: "Financial stability",
        wishThree: "Retired by the time I reach 70",
        /* NEEDS WORK */
};

