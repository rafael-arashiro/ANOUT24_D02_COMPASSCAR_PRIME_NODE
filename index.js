// Import the express library
const express = require('express');

// Initialize the app
const app = express();

// Define a port for the server to listen on
const port = 3000;

// Middleware to handle JSON data
app.use(express.json());

// Basic route to handle GET requests
app.get('/', (req, res) => {
  res.json({ message: 'Node running in AWS EC2' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

