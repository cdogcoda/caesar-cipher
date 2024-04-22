// My Pseudocode

// Create function to receive message and shift 
// -> Returns the new message to the function call
// -> Called when submit button is pressed
// Create function to display the message in the textbox
// -> Should also clear the message and shift box contents

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function shiftMessage(message, shiftAmount) {
    let shiftedMessage = "";
    let currentLetterIndex;
    let shiftedLetterIndex; 
    for (const msgLetter of message) {
        currentLetterIndex = alphabet.findIndex((letter) => letter == msgLetter);
        shiftedLetterIndex = currentLetterIndex+shiftAmount;
        shiftedMessage += alphabet[shiftedLetterIndex];
    }
    return shiftedMessage;
}