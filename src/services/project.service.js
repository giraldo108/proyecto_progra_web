const Project = require('../models/project.model');

// crear un nuevo proyecto
exports.createProject = async (name, description) => {
    try {
        // se crea con los datos recibidos
        const project = await Project.create({ name, description });
        return project; // retornamos el proyecto creado
    } catch (error) {
        // si hay un error se da el mensaje 
        throw new Error(error.message || 'Error al crear el proyecto');
    }
};

// ontener todos los proyectos 
exports.getAllProjects = async () => {
    try {
        // se obtien usando el metodo finall
        const projects = await Project.findAll();
        return projects; // retornamoos la lista de proyecto
    } catch (error) {
        // si hay un error se lanza este mensaje 
        throw new Error(error.message || 'Error al obtener los proyectos');
    }
};
