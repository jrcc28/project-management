import express, { Application } from 'express';
import cors from 'cors';

import projectRoutes from "../routes/projects";
import taskRoutes from "../routes/tasks";
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        projects: '/projects',
        tasks: '/tasks'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Initial methods
        this.dbConnection();
        this.middlewares();

        // Define routes
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    middlewares(){
        // CORS
        this.app.use(cors()); // cors ({ ctrl+space to see options })

        // Read body
        this.app.use(express.json()); // Cast body as json

        // Public folder
        // this.app.use( express.static('public'));
    }

    // Using xampp and npm sequelize to connect with SQL DB
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online!');
        } catch (error) {
            throw new Error(error);
        }
    }

    routes(){
        this.app.use(this.apiPaths.projects, projectRoutes);
        this.app.use(this.apiPaths.tasks, taskRoutes);
    }
}

export default Server;