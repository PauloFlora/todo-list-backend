import express from 'express';
import { Application, Request, Response } from 'express';
import TaskRouter from './router/TaskRouter';
import cors from 'cors';
require('dotenv').config();

const PORT = process.env.PORT;

const app: Application = express();

app.use(express.json());
//cors is beeing used for testing in the same machine as the frontend server.
app.use(cors({
  origin: '*',
}))
app.use('/tasks', TaskRouter);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
}); 