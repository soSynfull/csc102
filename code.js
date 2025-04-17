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

