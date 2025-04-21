const projectService = require('../services/project.service');

// Crear nuevo proyecto
exports.createProject = async (req, res) => {
    try {
        //extraer datos del cuerpo de la peticion
        const { nombre, descripcion, administrador_id } = req.body;
        //obtener ID del administrador desde el token de autenticacion
        const admin_from_token = req.user.administrador_id;
        //llamar al servicio para crear el proyeecto
        const newProject = await projectService.createProject(nombre, descripcion, administrador_id, admin_from_token);
        //respuesta exitosa
        res.status(201),json({ message: 'proyecto creado con exito', newProject}); 
    } catch (err) {
        //manejar errores
        res.status(500).json({ message: err.message });
    }
};

// Obtener todos los proyectos (general o para administradores si luego se filtra)
exports.getAllProjects = async (req, res) => {
    try {
        //obtener todos los proyectos mediante el servicio
        const projects = await projectService.getAllProjects();
        //retornar respuesta exitosa 
        res.status(200).json({ message: 'Proyectos obtenidos con éxito', projects });
    } catch (err) {
        //manejar errores
        res.status(500).json({ message: err.message });
    }
};

// Asignar usuarios a un proyecto
exports.assignUsersToProject = async (req, res) => {
    try {
        //obtener datos de asignacion del cuepo de la peticion
        const data = req.body;
        //llamar al servicio para realizar la asignacion
        const project = await projectService.assignUsersToProject(data);
        //retornar respuesta exitosa
        res.status(200).json({ message: 'usuarios asignados al proyecto con exito', project });
    } catch (err) {
        //manejar errores
        res.status(500).json({ message: err.message });
    }
};

//elimina un usuario de un proyecto
exports.removeUserFromProject = async (req, res) => {
    try {
        //ontener datos de desvimculacion del cuerpo de la peticion
        const data = req.body;
        //llmar al servivio para realizar la eliminacion
        const result = await projectService.removeUserFromProject(data);
        //respuesta exitosa
        res.status(200).json({ message: 'usuario eliminado del proyecto con exito', result });
    } catch (err){
        //manejar errores
        res.status(500).json({ message: err.message });
    }
};

//obtiene un proyecto por su ID
exports.getProjectById = async (req, res) => {
    try {
        //obtiene el id de parametro a numero
        const id = Number(req.params.id);
        //obtener el proyecto mediante el servicio
        const project = await projectService.getProjectsByUserId(id);
        //retornar respuesta exitosa
        res.status(200).json({ message: 'Proyecto obtenido con éxito', project });
    } catch (err) {
        //manejo errores
        res.status(500).json({ message: err.message });
    }
};

// Actualizar informacion del proyecto
exports.updateProject = async (req, res) => {
    try {
        //obtener ID del proyecto de los parametros de ruta
        const id = req.params.id;
        //extraer datos de actualizacion del cuerpo de peticion
        const { nombre, descripcion, administrador_id } = req.body;
        //lmar al servicio para realizar la actualizacion
        const project = await projectService.updateProject(id, nombre, descripcion, administrador_id);
        //retornar respuesta exitosa
        res.status(200).json({ message: 'Proyecto actualizado con éxito', project });
    } catch (err) {
        //manejo de errores
        res.status(500).json({ message: err.message });
    }
};

// Eliminar proyecto
exports.deleteProject = async (req, res) => {
    try {
        //obtener ID del proyecto de los parametros de ruta
        const id = req.params.id;
        //llmar al servicio para eliminar el proyecto
        const result = await projectService.deleteProject(id);
        //respuesta exitosa
        res.status(200).json(result);
    } catch (err) {
        //manejo de errores
        res.status(500).json({ message: err.message });
    }
};
