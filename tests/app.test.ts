import request from 'supertest';
import app from '../src/app';

describe('Todo list app', () => {
    let todoListApp: TodoListApp;

    beforeEach(() => {
        todoListApp = new TodoListApp()
    })

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
            await todoListApp.assertTaskListIsEmpty();
        });

        it('added tasks to the list are displayed', async () => {
            await todoListApp.addTask('Go to the grocery store')

            const response = await request(app)
                .get('/list')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).toEqual({tasks: ['Go to the grocery store']});
        })
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

    async addTask(goToTheGroceryStore: string) {
        
    }
}