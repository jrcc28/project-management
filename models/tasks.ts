import { DataTypes } from 'sequelize';
import db from '../db/connection';

// Definition of the model
const Task = db.define('Task', { // Sequelize create two more fields (createdAt and updatedAt)
    id_project_FK:{
        type:DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: 'No description'
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

export default Task;