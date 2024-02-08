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
                //template literal in `` because it contains a variable: ${}
                alert(`You clicked ${gameType}`)
            }

        })
    }
})

/**
 *  The main game "loop", called when the script is first loaded
 *  and after the user's answer has been processed
 */
function runGame() {
    //creates 2 random number between 1-25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(params) {
    
}
//perform calculation and return correct answer and game type to checkAnswer function
function calculateCorrectAnswer(params) {
    
}
// increment and log correct answers
function incrementScore(params) {
    
}
//increment and log wrong answers
function incrementWrongAnswer(params) {
    
}
// display the questions
function displayAdditionQuestion(params) {
    
}

function displaySubtractQuestion(params) {
    
}

function displayMultiplyQuestion(params) {
    
}

function displayDivideQuestion(params) {
    
}