// Script for the contact form submission

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate sending the message (for demo purposes)
        alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
        document.getElementById('contact-form').reset(); // Reset form fields
    } else {
        alert('Please fill in all fields.');
    }
});
