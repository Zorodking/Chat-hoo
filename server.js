const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Handle signup request
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    // Handle user signup logic here (e.g., save to database)
    res.status(200).send('Signup successful');
  } else {
    res.status(400).send('Signup failed');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
