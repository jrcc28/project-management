import { Sequelize } from 'sequelize';

const db = new Sequelize('projects-management', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false // Se the log of the DB in the console.
});

export default db;