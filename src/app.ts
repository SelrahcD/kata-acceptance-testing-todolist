import express, { Request, Response, NextFunction } from 'express';



const todoApp = () => {
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



// Only start the server if this file is run directly
if (require.main === module) {
    const port = process.env.PORT || 3000;
    const app = todoApp();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export {todoApp};