import request from 'supertest';
import {todoApp} from '../src/app';
import {Express, response} from "express";

describe('Todo list app', () => {
    let todoListApp: TodoListApp;
    let app: Express;

    beforeEach(() => {
        app = todoApp();
        todoListApp = new TodoListApp(app)
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

            await todoListApp.assertTodoListContainsTask('Go to the grocery store');
        })
    });
});

class TodoListApp {
    private app: Express;

    
    constructor(app: Express) {
        this.app = app;
    }

    async assertTaskListIsEmpty() {
        const response = await request(this.app)
            .get('/list')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toEqual({tasks: []});
    }

    async assertTodoListContainsTask(taskName: string) {
        const response = await request(this.app)
            .get('/list')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual({tasks: [taskName]});
    }

    //TODO: test by adding multiple tasks
    async addTask(taskName: string) {
        await request(this.app)
            .post('/list')
            .send({task: taskName})
            .expect(200)

    }
}