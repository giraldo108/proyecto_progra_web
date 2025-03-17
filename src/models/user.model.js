// Importamos DataTypes desde Sequelize para definir los tipos de datos de las columnas  
const { DataTypes } = require('sequelize');  
// Importamos la instancia de conexión a la base de datos  
const sequelize = require('../config/database');  

// Definimos el modelo User que representa la tabla "usuarios" en la base de datos  
const User = sequelize.define('usuarios', {  
    // ID del usuario, clave primaria con auto-incremento  
    id: {  
        type: DataTypes.INTEGER,  
        primaryKey: true,  
        autoIncrement: true  
    },  
    // Nombre del usuario, debe ser único y no puede estar vacío  
    nombre: {  
        type: DataTypes.STRING,  
        allowNull: false,  
        unique: true  
    },  
    // Correo del usuario, debe ser único y no puede estar vacío  
    email: {  
        type: DataTypes.STRING,  
        allowNull: false,  
        unique: true  
    },  
    // Contraseña del usuario, no puede estar vacía  
    password: {  
        type: DataTypes.STRING,  
        allowNull: false  
    },  
    // ID del rol, clave foránea que hace referencia a la tabla "roles"  
    rol_id: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
        references: { model: 'roles', key: 'id' }  
    },  
    // ID del administrador, permite relaciones autorreferenciales dentro de la misma tabla  
    administrador_id: {  
        type: DataTypes.INTEGER,  
        allowNull: true,  
        references: { model: 'usuarios', key: 'id' }  
    }  
}, {  
    // Desactivamos timestamps automáticos (createdAt y updatedAt)  
    timestamps: false,  
    // Especificamos el nombre exacto de la tabla en la base de datos  
    tableName: 'usuarios',  
});  

// Exportamos el modelo para poder usarlo en otras partes del proyecto  
module.exports = User;  
