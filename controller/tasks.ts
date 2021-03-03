import { Request, Response } from "express";
import Task from "../models/tasks";

export const getTasks = async(req: Request, res: Response) => {
    const tasks = await Task.findAll();
    res.json({
        msg: 'getTasks',
        tasks
    });
}

export const getTask = async(req:Request, res:Response) => {
    const { id } = req.params;

    const task = await Task.findByPk(id);
    if(task)
        res.json({
            task
        });
    else
        res.status(404).json({
            msg: `Task with id ${id} doesn't exists`
        });
}

export const postTask = async(req:Request, res:Response) => {
    const { body } = req; // Body requires the id_project_FK

    try {
        const task = Task.build(body);
        await task.save();
        res.json({
            task
        });
    } catch (e) {
        console.log(`Error: ${e}`);
        res.status(500).json({
            msg: `Error on DB while creating task`
        });
    }
}

export const putTask = async(req:Request, res:Response) => {
    const { body } = req;
    const { id , id_project } = req.params;

    try {
        const task = await Task.findOne({
            where: {
                id,
                id_project_FK: id_project
            }
        });

        if(!task){
            return res.status(404).json({
                msg: `Task with id ${id} doesn't exists`
            });
        }

        await task.update(body);
        res.json({
            task
        });

    } catch (e) {
        console.log(`Error: ${e}`);
        res.status(500).json({
            msg: `Error on DB while updating task`
        });
    }
}

export const deleteTask = async(req:Request, res:Response) => {
    const { id , id_project } = req.params;

    const task = await Task.findOne({
        where: {
            id,
            id_project_FK: id_project
        }
    });

    if(!task){
        return res.status(404).json({
            msg: `Task with id ${id} doesn't exists`
        });
    }

    // fisic delete
    await task.destroy();

    res.json({
        msg: 'deleteTask',
        id
    });
}