import express, { Request, Response, NextFunction } from 'express';



const todoAppServer = () => {
    const app = express();

    let tasks: string[] = [];

// Middleware for JSON parsing
    app.use(express.json());

// Basic route
    app.get('/', (req: Request, res: Response) => {
        res.json({ message: 'Welcome to Express + TypeScript Server' });
    });


    app.get('/list', (req: Request, res: Response) => {
        res.json({ tasks: tasks });
    });

    app.post('/list', (req: Request, res: Response) => {
        tasks.push(req.body.task)
        res.json({  });
    });


// Error handling middleware
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).json({ error: 'Something went wrong!' });
    });

    return app;
}





export default todoAppServer;