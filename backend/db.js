const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD', // IMPORTANT: Put your actual MySQL password here
  database: 'portfolio_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.stack);
    return;
  }
  console.log('Connected to MySQL portfolio_db!');
});

module.exports = connection;
