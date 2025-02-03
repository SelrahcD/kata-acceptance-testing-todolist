import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to Express + TypeScript Server' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});