// Create web server and listen on port 3000
// To run this file, type node comments.js in terminal

const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET request at /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request');
});

// Create a route for POST request at /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request');
});

// Create a route for PUT request at /comments
app.put('/comments', (req, res) => {
  res.send('This is a PUT request');
});

// Create a route for DELETE request at /comments
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request');
});

// Start web server
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}`);
});
