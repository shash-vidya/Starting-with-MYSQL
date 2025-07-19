const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shashvraj21!', // replace with your password
    database: 'testdb' // replace with your database name
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

// Sample route to test database connection
app.get('/', (req, res) => {
    db.query('SELECT NOW() AS currentTime', (err, results) => {
        if (err) {
            res.status(500).send('Database error');
        } else {
            res.send(`Database connected. Current time: ${results[0].currentTime}`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
