const randomPasswordDisplay = document.getElementById("randomPasswordDisplay");
const passwordLengthInput = document.getElementById("passwordLengthInput");

const smallLetters = "abcdefghijklmnopqrstuvwxyz";

const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";

const specialChars = "@$%&*-_=+;:?";

const allChars = `${smallLetters}${capitalLetters}${numbers}${specialChars}`;


function generateRandomPassword() {
    const passwordLength = parseInt(passwordLengthInput.value);

    if (isNaN(passwordLength) || String(passwordLength).trim() === "") {
        alert("Enter valid password length!");
        return;
    }
    if (passwordLength > 16) {
        alert("16 characters max!");
        return;
    }
    if (passwordLength < 4) {
        alert("4 characters minimum!");
        return;
    }
    
    // if randomPasswordDisplay has any value, remove it
    if (randomPasswordDisplay.textContent) randomPasswordDisplay.textContent = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndexes = Math.floor(Math.random() * allChars.length);
        const randomChars = allChars.charAt(randomIndexes);

        // += so that it displays random chars until it reaches passwordLen
        randomPasswordDisplay.textContent += randomChars;
    }
}