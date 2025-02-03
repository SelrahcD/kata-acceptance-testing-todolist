import request from 'supertest';
import app from '../src/app';

describe('Express App', () => {
    describe('GET /', () => {
        it('should return welcome message', async () => {
            const response = await request(app)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).toEqual({
                message: 'Welcome to Express + TypeScript Server'
            });
        });
    });
});