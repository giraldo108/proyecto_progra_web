// sequelize manejo de bd
const sequelize = require('sequelize');
// instancia conexion de datos
const sequelize = require('../config/database');

// la relacion entre rolesy permisos
const RolePermission = sequelize.define('roles_permisos', {
   // clave foranea roles
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles', // Nombre de la tabla de roles en la base de datos
            key: 'id'
        }
    },
    // clave foranea permisos
    permiso_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'permisos', // Nombre de la tabla de permisos en la base de datos
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'roles_permisos',
});

module.exports = RolePermission;