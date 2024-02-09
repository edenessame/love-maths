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
            //calls the checkAnswer function
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                //call runGame function
                runGame(gameType);
            }

        });
    }
    //default game to run on open
    runGame("addition");

});

/**
 *  The main game "loop", called when the script is first loaded
 *  and after the user's answer has been processed
 */
function runGame(gameType) {
    //creates 2 random number between 1-25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") { // gameType is being taken from the html button data-type, it has to match the name there. if its "addition" it will display addition question, otherwise which ever one is selected
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        //throw statement stops game running and sends error message to console
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * checks the users answer against the first element in 
 * the returned calculateCorrectAnswer
 *
 */
function checkAnswer() {

    // takes answer from the input with the id answer-box and stores it in let = userAnswer
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer(); // returns an array [the correct answer in a number, and the method used eg "addition"]
    let isCorrect = userAnswer === calculatedAnswer[0]; // checks the users answer matches the first item in the array, the correct answer

    // we check them against each other and either return a congratulations or comiserations and the correct answer
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore(); // calls this function and updates correct answers

    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer(); // calls this function and updates incorrect answers
    }

    // run the game again after of the same type, so the user can carry on playing, so calling the second element in calculatedAnswer array: the game type
    runGame(calculatedAnswer[1]);


}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom and returns the right answer
 */
function calculateCorrectAnswer() {
    
    let operand1 = parseInt(document.getElementById("operand1").innerText); // gets the innertext of the html span operand1
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") { //if the operator === "+" in the html innertext, return array calculating the answer between operator 1 and 2 and call the game type addition to load so the user can play again
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") // same as above but changed to subtract and call the subtract game to carry on running run
        return [operand1 - operand2, "subtract"]; 
      else if (operator === "x") { 
        return [operand1 * operand2, "multiply"]; 
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * gets the current score from the DOM and increments it by 1
 * 
 */
function incrementScore(params) {

    // create a variable getting the inner text of the span with the id of score
    let oldScore = parseInt(document.getElementById("score").innerText);
    // now we have the variable we can write it back to the DOM and alter the inner text of the span. ++oldScore adds one to the value
    document.getElementById("score").innerText = ++oldScore;
    
}

/**
 * gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(params) {

    // create a variable getting the inner text of the span with the id of incorrect
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    // now we have the variable we can write it back to the DOM and alter the inner text of the span. ++oldScore adds one to the value
    document.getElementById("incorrect").innerText = ++oldScore;
    
}
// display the questions
function displayAdditionQuestion(operand1, operand2) {
    
    document.getElementById("operand1").textContent = operand1; // without let gets the element to alter it. this will get the span with the id "operand1" and alter its inner text to the random numbers created in runGame 
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+"; // without let gets the element to alter it. this will get the span with the id "operator" and alter its inner text to "+"

}

function displaySubtractQuestion(operand1, operand2) {

    // we need the bigger number first to subtract it so theres no minus numbers
    // this works like an if statement: the condition we are checking goes before the "?" the else part goes after the ":"
    //this question is, is operand1 bigger than operand2? if 1 is bigger return that, if 2 is bigger return that 
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
    
}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
    
}

function displayDivideQuestion(params) {
    
}