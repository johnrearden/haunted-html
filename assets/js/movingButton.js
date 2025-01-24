// A list of words that will be added to the text area
const spookyPhrase = [
    "All", "work", "and", "no", "play", "makes", "Jack", "a", "dull", "boy.\n"
]

// A counter to keep track of the current word in the spookyPhrase
let counter = 0;

// Get the elements we need to manipulate
const checkoutButton = document.getElementById('checkout-button');
const nameField = document.getElementById('name');
const textArea = document.getElementById('description');
const titleHeading = document.getElementById('title-heading');

// Add an event listener to the nameField
nameField.addEventListener('input', () => {

    // Add the next word from the spookyPhrase to the textArea
    const currentText = textArea.value;
    const nextWord = spookyPhrase[counter % spookyPhrase.length];
    textArea.value = currentText + " " + nextWord + " ";
    counter++;

    // Rotate the titleHeading vertically
    const rotation = counter % 2 === 0 ? 0 : 180;
    titleHeading.style.transform = `rotateX(${rotation}deg)`;
})

// Add an event listener to the checkoutButton to move it to the right
function onMouseOverCorrectPosition(event) {
    event.target.style.transform="translateX(250px)";
    event.target.innerText = "But you can never leave...";
    event.target.removeEventListener('mouseover', onMouseOverCorrectPosition);

    // To stop the user from cheating by moving the mouse quickly
    setTimeout(() => {
        event.target.addEventListener('mouseover', onMouseOverSpookyPosition);
    }, 400);
    
}

// Add an event listener to the checkoutButton to move it back to where it should be
function onMouseOverSpookyPosition(event) {
    event.target.style.transform="translateX(0)";
    event.target.innerText = "Checkout (anytime you want)";
    event.target.removeEventListener('mouseover', onMouseOverSpookyPosition);

    // To stop the user from cheating by moving the mouse quickly
    setTimeout(() => {
        event.target.addEventListener('mouseover', onMouseOverCorrectPosition);
    }, 400);
    
}

// Add the initial event listener to the checkoutButton
checkoutButton.addEventListener('mouseover', onMouseOverCorrectPosition);