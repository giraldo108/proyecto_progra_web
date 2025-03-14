const Project = require('../models/project.model');

exports.createProject = async (name, description) => {
    try {
        const project = await Project.create({ name, description });
        return project;
    } catch (error) {
        throw new Error(error.message || 'Error al crear el proyecto');
    }
};

exports.getAllProjects = async () => {
    try {
        const projects = await Project.findAll();
        return projects;
    } catch (error) {
        throw new Error(error.message || 'Error al obtener los proyectos');
    }
};
