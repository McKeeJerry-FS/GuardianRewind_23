// get the user's message to reverse
function getValues(){
    // get the text input from the page
    let msg = document.getElementById('userInput').value;

    // Validate the input : make sure it's not empty
    //                      make sure it is at least two characters (optional)
    if(msg.length == 0){
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops',
            text: 'Please enter a message to reverse',
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
function reverseMessage(msg){
    let messageArray = msg.split('');
    let outputArray = [];
    for(let i = messageArray.length - 1; i >= 0 ;i--){
        let letter = messageArray[i];
        outputArray.push(letter);
    }

    let output = outputArray.join('');
    return output;
}

// displays the reversed message
function displayReversedMessage(revMsg){
    // displays the reversed message in the alert
    document.getElementById('msg').textContent = `Your message reversed is: ${revMsg}`;
    // removes the invisible class from the alert
    document.getElementById('alert').classList.remove('invisible');
}