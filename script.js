const textAnimation = document.querySelector('.text-animation');
const texts = ["Web Developer", "Web Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0; // Reset the count to loop through the texts again
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textAnimation.textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            erase(); // Call the erase function after the entire text has been typed out
        }, 2000); // Pause before erasing
    } else {
        setTimeout(type, 100); // Continue typing
    }
}

function erase() {
    letter = currentText.slice(0, --index);
    textAnimation.textContent = letter;

    if (letter.length === 0) {
        count++;
        setTimeout(type, 500); // Start typing the next text after erasing
    } else {
        setTimeout(erase, 50); // Continue erasing
    }
}

// Initial call to start the typing effect
type();
