/* You utilized variables to store some type of value */




                   


// Return a reference to the object with the specified value ("PlayVentiCuatro")
function playVentiCuatro()
{
    let results = document.getElementById("Resultados de VentiCuatro")

    // Generate a random number between 1 and 24 and store in variable
    let die1 = Math.floor(Math.random() * 24) + 1;

    let die2 = Math.floor(Math.random() * 24) + 1;

    // Cantanation: Takes the numeric value of the string and attaches it to the variables for a combined output
    console.log("Die 1: " + die1);

    console.log("Die 2: " + die2 )

    let sum = die1 + die2; 

    // "If" statements are boolean which consists of true and false outcomes
    // "==" is a comparison to see if the values are equivalent (conditional)
    // "|| = OR" to combine multiple statements/expressions within the same boolean statement
    if ( sum == 4 || sum == 8 || sum == 16 || sum == 24 || sum == 28 || sum == 32 || sum == 36 || sum == 40 || sum == 44 || sum == 48 )
    {
        console.log("VentiCuatro >:) Hasta Nunca")
        results.innerHTML = "VentiCuatro >:) Hasta Nunca"
    }

    // "Else If" gets added to an existed "if" clause
    // "&& = And" adds an additional/seperate boolean expression to the same clause
    // "% = modulo" which returns the remainder number of a division problem
    else if (die1 > die2 && die1 % 12 == 1 || die2 % 4 == 4 ) 
    {
        console.log("Muchas Felicidades!!! Tu Ganaste!!")
        results.innerHTML = "Muchas Felicidades!!! Tu Ganaste!!"
    }

    // code that will run if "If" and "else if" are both false
    else
    {
        console.log("Otra Vez! Otra Vez! Otra Vez!")
        results.innerHTML = "Otra Vez! Otra Vez! Otra Vez"
    }
}

function checkforPalindrome()
{
    // Needed to do the palindrome check

    let results = document.getElementById("palindromeResults")
    console.log("Palindrome Check")
    let inputField = document.getElementById("palindromeField");

    let inputValue = inputField.value
    console.log(inputValue);
    // ".length" returns the length of a string object
    let stringLength = inputValue.length;

    if (stringLength > 0)
    {
        let iterationCount = Math.floor(stringLength/2);

        let lastCharacterIndex = inputValue.length - 1;

        let palindromeCheckResult = true;

        // Allowed to continue our palidrone check
        // "; ;" allows our loop to continue running (condition)
        // "++" allows to update i value by + 1
        for(let i = 0; i < iterationCount; i ++)
        {
            //"!==" both value of variable and its type are not equal to each other
            if (inputValue[i] !== inputValue[lastCharacterIndex - i])
            {
                console.log("This is not a palindrome!!!")
                results.innerHTML = "This is not a palindrome!!!"
                // "break" terminates "For Loop" and continues instructions listed after
                palindromeCheckResult = false;
                break;
            }
        }
        if (palindromeCheckResult)
        {
            console.log("This is a palindrome!!!");
            results.innerHTML = "This is a palindrome!!!"
        }
    }
}