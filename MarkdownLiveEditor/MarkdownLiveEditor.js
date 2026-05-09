const plaintextInput = document.getElementById("plaintext-input");
const markdownOutputDisplay = document.getElementById("markdown-output-display");

function renderMarkdown() {
    let plaintext = plaintextInput.value;

    // remove the most common zerowidth characters from the start of the file
    plaintext = plaintext.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "");

    // convert cleaned text to html
    const rawHTML = marked.parse(plaintext);

    const cleanedHTML = DOMPurify.sanitize(rawHTML);

    markdownOutputDisplay.innerHTML = cleanedHTML;
}