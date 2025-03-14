const sequelize = require('sequelize');
const sequelize = require('../config/database');

const RolePermission = sequelize.define('roles_permisos', {
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles', // Nombre de la tabla de roles en la base de datos
            key: 'id'
        }
    },
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