const express = require('express');
const routen = express.Router();
const authController = require('../controllers/auth.controller');
const { router } = require('../app');

router.post('/auth/login', authController.login);

module.exports = router;