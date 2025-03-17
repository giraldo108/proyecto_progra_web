// rutas en la app
const express = require('express');
// crear una instancia
const router = express.Router();
// importar el controlador 
const projectController = require('../controllers/project.controller');
// def ruta para crear un proyecto
router.post('/projects', projectController.createProject);
// def ruta para ob proyectos
router.get('/projects', projectController.getProjects);

module.exports = router;
