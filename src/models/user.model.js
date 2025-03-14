const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('usuarios', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    rol_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: { model: 'roles', key: 'id' } // Corrección del espacio extra
    },
    administrador_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'usuarios', key: 'id' } // Relación autorreferencial
    }
}, {
    timestamps: false,  
    tableName: 'usuarios',
});

module.exports = User;
