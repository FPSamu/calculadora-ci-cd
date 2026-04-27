const express = require('express');
const app = express();

app.get('/suma', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: Number(a) + Number(b) });
});

module.exports = app;