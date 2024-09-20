import express from "express";
import mysql from "mysql2";
import cors from 'cors';

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'desserts_db'
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.stack);
        return;
    }
    console.log("Connected to the database as id", connection.threadId);
});

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.get('/api/desserts', (req, res) => {
    const searchName = req.query.name || '';
    connection.query('SELECT name FROM desserts WHERE name LIKE ?', [`%${searchName}%`], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/api/desserts', (req, res) => {
    const { name } = req.body;
    connection.query('INSERT INTO desserts (name) VALUES (?)', [name], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, name });
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
