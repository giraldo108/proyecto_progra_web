const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authenticateToken, checkRole } = require('../middlewares/auth.middlewares');
const ROLES = require('../utils/constans');
// Ruta POST para iniciar sesión
// Aquí el cliente debe enviar: { email, contraseña }
router.post('/auth/login', authenticateToken, checkRole([ROLES.ADMIN]), authController.login);

// Exportamos el router para usarlo en app.js o index.js
module.exports = router;
