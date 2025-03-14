const projectService = require('../services/project.service');

exports.createProject = async (req, res) => {
    const { name, description } = req.body;
    try {
        const project = await projectService.createProject(name, description);
        res.status(201).json({ message: 'Proyecto creado exitosamente', project });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json({ projects });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
