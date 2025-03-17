// para defenir datos
const { DataTypes } = require('sequelize');
// conexion base de datos
const sequelize = require('../config/database');
// establecer relaciones
const User = require('./user.model');

// defenir modelo 
const Project = sequelize.define('proyectos', {
    // id del proyecto
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // nombre del proyecto
    nombre: { type: DataTypes.STRING, allowNull: false },
   // descripcion del proyecto
    descripcion: { type: DataTypes.STRING, allowNull: false },
    // fecha de creacion por defecto la hora y fecha actual
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    // id de usuari admin, con tabla de usuarios
    administrador_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { model: 'usuarios', key: 'id' } // Nombre de la tabla en la BD
    },
}, {
    // desactivar timetamps automaticos de sequelize
    timestamps: false,
    // nombre de la tabla
    tableName: 'proyectos',
    hooks: { 
        afterCreate: (project) => {
           // ajustar la fecha de creacion 
            project.fecha_creacion = new Date(project.fecha_creacion.getTime() - 5 * 60 * 60 * 1000);
        }
    }
});

module.exports = Project;
