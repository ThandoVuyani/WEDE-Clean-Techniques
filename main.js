console.log("JavaScript loaded")
function buttonSubmitted() {
    prompt("Enquiry Submitted! Thank you for your enquiry. We will get back to you as soon as possible.");
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    buttonSubmitted();
});