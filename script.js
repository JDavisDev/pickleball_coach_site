// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thanks, ${name}! Your message has been sent.`);
  
    // Clear form fields
    this.reset();
  });
  