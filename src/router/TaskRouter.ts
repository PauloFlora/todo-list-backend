import express, { Request, Response} from'express';
import TasksController from '../controller/TaskController';

const router = express();

router.get('/',  TasksController.getAll);

router.post('/');

router.delete('/:id',);

router.patch('/:id',)

export default router;