const {Sequelize} = require('sequelize');
const dotenv = require('dotenv'); // El dotenv es para poder cargar variables de entorno

dotenv.config();// Se cargan las variables de entorno

// Se crea la nueva instancia de Sequelize pasando parametros necesarios para la conección a la db
const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,
    timezone: '-05:00'

});

// por ultimo se exporta la instacia de sequelize para que pueda ser utilizada en otros archivos del proyecto
module.exports = sequelize;