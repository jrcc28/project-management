import {Router} from 'express';
import { deleteTask, getTask, getTasks, postTask, putTask } from '../controller/tasks';

const taskRouter = Router();

// Projects middlewares here
taskRouter.get('/', getTasks);
taskRouter.get('/:id', getTask);
taskRouter.post('/', postTask);
taskRouter.put('/:id/:id_project', putTask);
taskRouter.delete('/:id/:id_project', deleteTask);

export default taskRouter;