import express from 'express';
import cors from 'cors';
import pingRoute from './features/ping/ping.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ping', pingRoute);

// // Error handling middleware (must be last)
// app.use(errorHandler);

export default app;