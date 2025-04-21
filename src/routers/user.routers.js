const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { authenticateToken, checkRole } = require('../middlewares/auth.middlewares');
const ROLES = require('../utils/constans'); // <- Estaba mal escrito: "constans"
const errorHandler = require('../middlewares/error.middleware');

// Rutas protegidas solo para ADMIN
router.post('/users/create', authenticateToken, checkRole({ role: ROLES.ADMIN }), userController.createUser);
router.put('/users/update/:id', authenticateToken, checkRole({ role: ROLES.ADMIN }), userController.updateUser);
router.delete('/users/delete/:id', authenticateToken, checkRole({ role: ROLES.ADMIN }), userController.deleteUser);

// Obtener todos los usuarios de un administrador
router.get('/users', authenticateToken, checkRole({ role: ROLES.ADMIN }), userController.getAllUsersByAdministradorId);

// Obtener todos los usuarios por rol
router.get('/users/rol/:id', authenticateToken, checkRole({ role: ROLES.ADMIN }), userController.getAllUsersByRolId);
router.get('/', (req,res) => {
    res.send('rutas de usuario funcionando');
});
// Middleware de errores
router.use(errorHandler);

module.exports = router;
