// Get the welcome message and logout button elements
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-btn');

// Retrieve the username from localStorage (or use your session variable)
const username = localStorage.getItem('username');

// Display personalized message
if (username) {
    welcomeMessage.innerHTML = `Welcome, ${username}!`;
} else {
    welcomeMessage.innerHTML = 'Welcome, Guest!';
}

// Logout functionality
logoutButton.addEventListener('click', () => {
    // Clear the session or token (localStorage in this case)
    localStorage.removeItem('username');
    
    // Redirect back to the login page
    window.location.href = 'index.html';
});
