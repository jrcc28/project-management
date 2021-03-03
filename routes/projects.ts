import {Router} from 'express';
import { getProject, getProjects, postProject, putProject, deleteProject } from '../controller/projects';

const projectRouter = Router();

// Projects middlewares here
projectRouter.get('/', getProjects);
projectRouter.get('/:id', getProject);
projectRouter.post('/', postProject);
projectRouter.put('/:id', putProject);
projectRouter.delete('/:id', deleteProject);

export default projectRouter;