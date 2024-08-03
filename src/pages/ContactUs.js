document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        displayFormMessage('Please fill in all fields', 'error');
        return;
    }

    const Data = {
        name,
        email,
        subject,
        message
    };

    // Simulate form submission (you would replace this with actual server request)
    setTimeout(() => {
        displayFormMessage('Your message has been sent successfully!', 'success');
        document.getElementById('contactForm').reset();
    }, 1000);
});

function displayFormMessage(msg, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = msg;
    formMessage.className = type;
}
