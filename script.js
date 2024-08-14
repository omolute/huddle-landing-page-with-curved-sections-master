document.getElementById('submit').addEventListener('click', function(event) {

    event.preventDefault(); // Stop form submission

    var email = document.getElementById('email');
    var email_val = email.value
    var emailErr = document.getElementById('email-err');

    // Basic email pattern check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_val);
    
    if (!emailPattern) {
        emailErr.style.display = 'block'; // Show error message
        email.style.borderColor = 'red'
    } else {
        emailErr.style.display = 'none'; // Hide error message
        email.style.borderColor = 'black'
    }
});