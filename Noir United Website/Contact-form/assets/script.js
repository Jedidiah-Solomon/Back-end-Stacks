document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("contactForm").reset(); // Reset the form
});
