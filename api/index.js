import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error(err);
    });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'auth-ui/dist')));

// Catch all handler for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'auth-ui', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
