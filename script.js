// Get the form and input elements
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Add event listener for form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Send login request to the backend
    const response = await fetch('http://localhost:3000/login', {  // Change this URL to your actual backend URL if needed
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    // Handle the response
    if (response.ok) {
        // If login is successful, store username in localStorage and redirect to dashboard
        localStorage.setItem('username', username);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        // Show error message if login fails
        errorMessage.style.display = 'block';
    }
});
