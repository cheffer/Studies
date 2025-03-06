const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());

let users = [];

app.post('/users', async (req, res) => {
    try {
        const { name, age } = req.body;
        const newUser = { name, age };

        await new Promise(resolve => setTimeout(resolve, 1000));

        users.push(newUser);
        res.status(201).json(newUser);
    } catch (erro) {
        res.status(500).json({ erro: 'Failed to register user'});
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
