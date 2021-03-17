// Write a program that calculates income tax based on the following rules:
// a.The portion of the income that is less than $10k is untaxed
// b.The portion of the income that is less than $20k is taxed at 10%
// c.The portion of the income that is less than $50k is taxed at 20%
// d.Any portion of the income that is above $50k is taxed at 30%

// Assume this application will be used by a 3rd party tax consultant who will have to run this for 100 clients. 
//  Write a program that is scalable.
// The program should take the $ income and return the tax amount.

// Declaring the variables using let keyword, so that we can re-assign the values to it.
let Income1 = 10000
let Income2 = 20000
let Income3 = 50000


function calcTaxes(amount){

    let calculate = 0;
    if(amount > Income3){
        tax = (amount -Income3) * .30 + 
    }
}

// Google
var calculate_tax = function() {
    var total;
    var income = parseFloat( $("income").value );

    function calcTaxes(amount){
    var calculate = 0;
    if(amount > 85650){
        tax = (amount - 85650) * .28 + 870.0+(35350-8700)*.15+(89350-36900)*.25;
    }
    else if( amount > 35350){
    tax = (amount - 35350) * .25 + 870.0+(35350-8700)*.15;    
    }
    else if(amount > 8700){
    tax = (amount - 8700) * .15 + 870.0;
    }
    else{
       tax = amount * .10;
        }
    tax += amount * .153;
    return tax;
    /*
    10% on taxable income from $0 to $8,700, plus
    15% on taxable income over $8,700 to $35,350, plus
    25% on taxable income over $35,350 to $85,650, plus
    */
}
}