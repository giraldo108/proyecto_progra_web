const User = require('./user.model');
const Project = require('./project.model');
const UserProject = require('./userProject.model');

// relaciones muchos a muchos
User.belongsTomany(Project, { 
    through: UserProject, // tabla para relacion
    foreingkey: 'usuario_id',  // clave
    as: 'proyectos'  // acceder a los proyectos
});

Project.belongsTomany(User, { 
    through: UserProject,  // tabla para la relacion inversa
    foreingkey: 'proyecto_id' ,  // clave
    as: 'usuarios' // acceder a los usuarios
 });

//relacion de administrador
Project.belongsTo(User, { 
    foreingkey: 'administrador_id',  // clave para administrador
    as: 'administrador' // acceder al administrador del proyecto
 });

// exportar los modelos para uso en otras partes de proyecto 
module.exports = { user, project, UserProject};