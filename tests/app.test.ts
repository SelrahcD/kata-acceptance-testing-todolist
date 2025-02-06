import request from 'supertest';
import app from '../src/app';

describe('Todo list app', () => {
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


    describe('List tasks in todo list', () => {
        it('when a list is created, it\'s an empty list', async () => {
            const todoListApp = new TodoListApp()
            await todoListApp.assertTaskListIsEmpty();
        });
    });
});

class TodoListApp {
    async assertTaskListIsEmpty() {
        const response = await request(app)
            .get('/list')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual({tasks: []});
    }

}