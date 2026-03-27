const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  
  db.query(query, [name, email, message], (err, results) => {
    if (err) {
      console.error('Failed to insert the record:', err);
      return res.status(500).json({ error: 'Server integration failure' });
    }
    
    // Send response
    res.json({ message: 'Message sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Backend Server running locally on http://localhost:${PORT}`);
});
