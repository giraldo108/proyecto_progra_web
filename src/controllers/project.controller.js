const projectService = require('../services/project.service');

// para crear un nuevo proyecto
exports.createProject = async (req, res) => {
   //se trae el nombre y la descripcion de la solicitud 
    const { name, description } = req.body;
   
    try {
       // se llama el servicio para crear un nuevo proyecto 
        const project = await projectService.createProject(name, description);
        // respuesta con estado creado y datos
        res.status(201).json({ message: 'Proyecto creado exitosamente', project });
    } catch (err) {
       // si hay un error se envia el mensaje de error
        res.status(400).json({ message: err.message });
    }
};

// funcion para ontener proyectos
exports.getProjects = async (req, res) => {
    try {
       // se llama el servicio desde la base de datos
        const projects = await projectService.getAllProjects();
       // se envia una respuesta con estado ok
        res.status(200).json({ projects });
    } catch (err) {
        // si hay un error se envia el mensaje de error
        res.status(400).json({ message: err.message });
    }
};
