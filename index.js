const express = require('express');
const app = express();

app.get('/suma', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) + Number(b);
    res.json({ result });
});

app.get('/resta', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) - Number(b);
    res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});