// manejo de rutas
const express = require('express');
// definir rutas
const routen = express.Router();
// autenticacion
const authController = require('../controllers/auth.controller');
// 
const { router } = require('../app');
// iniciar sesion 
router.post('/auth/login', authController.login);

module.exports = router;