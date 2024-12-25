// Import dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware for handling CORS
app.use(cors());

// Middleware for parsing JSON data
app.use(express.json());

// Sample route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the Legal Assistance Backend!');
});

// Example route for login (authentication)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // For now, just log the credentials (you can replace with database logic later)
  console.log('User:', username, 'Password:', password);
  // Send back a response (could be an auth token later)
  res.status(200).send({ message: 'Login successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

