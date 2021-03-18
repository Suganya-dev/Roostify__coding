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

// function declaration 
function calcTaxes(amount){
// Setting it to a initial value
    let taxcalculate = 0;
// Conditional loop using if else 
// whatever value in the parameter, it checks for first condition,if it not applicable
// move to next condition, and return the result
    if(amount > Income3){
        taxcalculate += (amount -Income3) * .30 + (Income3 - Income2)*.20 + (Income2 - Income1)*.10;
    }
    else if(amount > Income2){
        taxcalculate += (amount - Income2) *.20 +  (Income2 - Income1)*.10
    }
    else if(amount > Income1){
        taxcalculate += (amount - Income1) * .10 
    }
    return taxcalculate
}
// function invoking should always stored in a variable
// and then console.log
const output = calcTaxes(90000)
console.log(output)
const output1 = calcTaxes(40000)
console.log(output1)
const output2 = calcTaxes(7000)
console.log(output2)

// I exceuted the output by running node Tax_file.js in the Terminal without using web browser.


// 2.Imagine there are actually 50 + brackets that change every year, and we need to comput 1 billion income
//  tax projections every year.

// a. From my prespective, hopefully we never have to do anything a billion times on a user's browser 
// b. Assuming hypothetically running in the browser, I would prefer Iterative method, standarad for loop will tend to be faster, than all other alternatives.
// c. Putting into the array of objects, .map array method is very efficient way going through massive amount of data.




