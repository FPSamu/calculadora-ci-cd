const request = require('supertest');
const express = require('express');
const app = express();

app.get('/suma', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: Number(a) + Number(b) });
});

describe('GET /suma', () => {
    it('should return sum', async () => {
        const res = await request(app).get('/suma?a=2&b=3');
        expect(res.body.result).toBe(5);
    });
});