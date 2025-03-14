const User = require('./user.model');
const Project = require('./project.model');
const UserProject = require('./userProject.model');

// relaciones muchos a muchos
User.belongsTomany(Project, { through: UserProject, foreingkey: 'usuario_id', as: 'proyectos' });
Project.belongsTomany(User, { through: UserProject, foreingkey: 'proyecto_id' , as: 'usuarios' });

//relacion de administrador
Project.belongsTo(User, { foreingkey: 'administrador_id', as: 'administrador' });

module.exports = { user, project, UserProject};