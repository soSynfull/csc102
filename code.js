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

function userInfoValidation()
{
    console.log("Checking User Info")

    let firstNameField = document.getElementById("firstNameField")

    let lastNameField = document.getElementById("lastNameField")

    let zipField = document.getElementById("zipField")

    let zipValue = zipField.value

    let results = document.getElementById("userInfoResults")

    results.innerHTML = "";

    let firstNameValue = firstNameField.value;

    let lastNameValue = lastNameField.value; 

    // concatenation allows two seperate strings to combine together
    let firstLastName = firstNameValue + " " + lastNameValue;

    console.log(firstLastName)

    if (firstLastName.length > 20)
    {
        results.innerHTML = "JINKIES SCOOB! Too many characters! Stay under 20!"

        return; 
    }
// "^" is the start of a string.
// "\" escapes the special character (^)
// "d" signifies that it makes the length of that digit (5)
// "$" is the end of the string
// "/    /" encloses the information that is with the string

let zipRegex = /^\d{5}$/

// ! at the beginning of an "IF" statement signifies "NOT"
    if(!zipRegex.test(zipValue))
    {
        results.innerHTML = "SLOW YOUR ROLLLLLLLL!!! ZIP CODES CONSISTS OF 5 NUMBERS, YOU SHOULD KNOW THIS!!!!"
        
        return;
    }

    results.innerHTML = " Your actions have brought you to the correct destination! "
    console.log("Input Validated")
}

