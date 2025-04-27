const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); // Importamos el controlador de usuarios
const { authenticateToken, checkRole } = require('../middlewares/auth.middlewares');
const ROLES = require('../utils/constans');
const errorHandler = require('../middlewares/error.middleware');

// Rutas de solicitud para usuarios      //middleware para hacer autenticación y asi proteger las rutas


router.post('/create', userController.createUser);
router.put('/update/:id', authenticateToken, checkRole([ROLES.ADMIN]), userController.updateUser);
router.get('/:id', authenticateToken, checkRole([ROLES.ADMIN]), userController.getAllUsersByAdministradorId);
router.delete('/delete/:id', authenticateToken, checkRole([ROLES.ADMIN]), userController.deleteUser);
router.get('/rol/:id', authenticateToken, checkRole([ROLES.ADMIN]), userController.getAllUsersByRolId);

router.use(errorHandler);// Middleware para manejar errores

// Exportamos el router para que se puedan utilizar las rutas que se hayan definido
module.exports = router;