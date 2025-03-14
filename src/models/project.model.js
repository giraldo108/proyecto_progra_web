const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Project = sequelize.define('proyectos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    administrador_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { model: 'usuarios', key: 'id' } // Nombre de la tabla en la BD
    },
}, {
    timestamps: false,
    tableName: 'proyectos',
    hooks: { 
        afterCreate: (project) => {
            project.fecha_creacion = new Date(project.fecha_creacion.getTime() - 5 * 60 * 60 * 1000);
        }
    }
});

module.exports = Project;
