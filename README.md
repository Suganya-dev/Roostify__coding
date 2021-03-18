
        ROOSTIFY - TAKE HOME ASSIGNMENT
      
Write a program that calculates income tax based on the following rules:
- The portion of the income that is less than $10k is untaxed
- The portion of the income that is less than $20k is taxed at 10%
- The portion of the income that is less than $50k is taxed at 20%
- Any portion of the income that is above $50k is taxed at 30%

ANS:  For the above program 
    - First i understood each and every tax_bracket
    - And then i looked up to "The Portion of the Income"(Part of the income)
    - Learned about how to calculate the  Incremental tax.(Tax calculator)
    - Came to conclusion to define a function with conditional logic - (if-else statements)
    - Finally invoking the function and stored it in a variable.
    - console.log to get the output.
    - I executed the file in the terminal without using web browser.
    - Running the command node(filename) in the terminal.
   
   
  2. Imagine there are actually 50+ brackets that change every year, and we need to compute 1 
    Billion income tax projections every year. 
    Describe in a few bullet points how you’d build a solution that scales.
   
  ANS: 
      - From my prespective, hopefully we never have to do anything a billion times on a user's browser
      - Assuming hypothetically running in the browser, I would prefer Iterative method, standarad for loop will tend to be 
        faster, than all other alternatives.
      - Putting into the array of objects, .map array method is very efficient way going through massive amount of data.
