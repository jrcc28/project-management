import { Request, Response } from "express";
import Project from "../models/projects";

export const getProjects = async(req: Request, res: Response) => {
    const projects = await Project.findAll();
    res.json({
        projects
    });
}

export const getProject = async(req:Request, res:Response) => {
    const { id } = req.params;

    const project = await Project.findByPk(id);
    if(project)
        res.json({
            project
        });
    else
        res.status(404).json({
            msg: `Project with id ${id} doesn't exists`
        });
}

export const postProject = async(req:Request, res:Response) => {
    const { body } = req;

    try {
        const project = Project.build(body);
        await project.save();
        res.json({
            project
        });
    } catch (e) {
        console.log(`Error: ${e}`);
        res.status(500).json({
            msg: `Error on DB creating project`
        });
    }
}

export const putProject = async(req:Request, res:Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const project = await Project.findByPk(id);
        if(!project){
            return res.status(404).json({
                msg: `Project with ${id} doesn't exists`
            });
        }

        await project.update(body);
        res.json({
            project
        });

    } catch (e) {
        console.log(`Error: ${e}`);
        res.status(500).json({
            msg: `Error on DB while updating project`
        });
    }
}

export const deleteProject = async(req:Request, res:Response) => {
    const { id } = req.params;

    const project = await Project.findByPk(id);

    if(!project){
        return res.status(404).json({
            msg: `Project with ${id} doesn't exists`
        });
    }

    // fisic delete
    await project.destroy();

    res.json({
        msg: 'Project deleted',
        id
    });
}