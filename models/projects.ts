import { DataTypes } from 'sequelize';
import db from '../db/connection';

// Definition of the model
const Project = db.define('Project', { // Sequelize create two more fields (createdAt and updatedAt)
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: 'No description',
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    },
    priority: {
        type: DataTypes.STRING,
        defaultValue: 'Medium',
        allowNull: true
    }
});

export default Project;