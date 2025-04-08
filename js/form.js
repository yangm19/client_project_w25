// inspired by stackoverflow
// Open the form when the "Have a Question? Contact Us!" button is clicked
document.getElementById("open-form").addEventListener("click", function() {
    // Display the contact form
    document.getElementById("contact-form").style.display = "block";
});

// Close the form when button is clicked
document.getElementById("close-form").addEventListener("click", function() {
    document.getElementById("contact-form").style.display = "none";
});

// Handle form submission
document.getElementById("question-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Email:", email);
    console.log("Message:", message);

    document.getElementById("contact-form").style.display = "none";

    alert("Your message has been sent!");
});