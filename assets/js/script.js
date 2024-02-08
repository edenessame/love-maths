//wait for the DOM to finish loading before running the game
//good idea to wait for DOM to load befor you start running code so you arent targeting elements that haven't loaded yet
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    //get all the buttons in an array, there are 5 buttons- [0,1,2,3,4]
    let buttons = document.getElementsByTagName("button");

    //go through the buttons arrayand return each element and store each item in the variable buttons, dont have to use index notation to get elements in the array
    for (let button of buttons) {
        //button is now each button and when one is clicked the code inside the block will load
        button.addEventListener("click", function() {
            //shows an alert telling the user which button was clicked, either submit or which type of game was clicked
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                //call runGame function
                runGame(gameType);
            }

        })
    }
    //default game to run on open
    runGame("addition");

})

/**
 *  The main game "loop", called when the script is first loaded
 *  and after the user's answer has been processed
 */
function runGame(gameType) {
    //creates 2 random number between 1-25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        //throw statement stops game running and sends error message to console
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer(params) {
    
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom and returns the right answer
 */
function calculateCorrectAnswer(params) {
    // .innerText gets the text content of the elements. parseInt makes sure a number is returned rather than a string, which is the default
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2 + "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting`;
    }
}
// increment and log correct answers
function incrementScore(params) {
    
}
//increment and log wrong answers
function incrementWrongAnswer(params) {
    
}
// display the questions
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(params) {
    
}

function displayMultiplyQuestion(params) {
    
}

function displayDivideQuestion(params) {
    
}