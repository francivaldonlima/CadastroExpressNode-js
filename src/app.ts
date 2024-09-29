import express from 'express';
import employeeRoutes from './routes/employeeRoutes';
import { connectDB } from './database/connection';

const app = express();

app.use(express.json());

connectDB();

app.use('/api', employeeRoutes);

export default app;
