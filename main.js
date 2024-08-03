const contactButton = document.getElementById('contact-button');
const formOverlay = document.getElementById('form-overlay');
const closeButton = document.getElementById('close-button');
const contactForm = document.getElementById('contact-form');

contactButton.addEventListener('click', function() {
    formOverlay.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
    formOverlay.style.display = 'none';
});

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    formOverlay.style.display = 'none'; // Hide the form overlay
    alert('Thank you for contacting us. Your message has been sent.'); // Show a thank you message
});