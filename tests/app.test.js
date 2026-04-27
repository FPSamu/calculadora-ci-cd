const request = require('supertest');
const app = require('../app');

describe('GET /suma', () => {
    it('should return sum', async () => {
        const res = await request(app).get('/suma?a=2&b=3');
        expect(res.body.result).toBe(5);
    });
});