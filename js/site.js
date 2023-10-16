// get the user's message to reverse
function getValues(){
    // get the text input from the page
    let msg = document.getElementById('userInput').value;

    // Validate the input : make sure it's not empty
    //                      make sure it is at least two characters (optional)
    if(msg.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            message: 'Please enter a message to reverse',
        });
    }
    else {
        // pass the input to reverseMessage function and assign its return value to a variable
        let revMsg = reverseMessage(msg);

        // give the reversed message to displayReversedMessage
        displayReversedMessage(revMsg);
    }
}

// reverse the string 
function reverseMessage(message){
    let msg = message;
}

// displays the reversed message
function displayReversedMessage(){

}