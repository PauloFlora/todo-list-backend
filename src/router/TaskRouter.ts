import express, { Request, Response} from'express';
import TasksController from '../controller/TaskController';

const router = express();

router.get('/',  TasksController.getAll);

router.post('/', TasksController.create);

router.delete('/:id', TasksController.delete);

router.patch('/:id', TasksController.update)

export default router;