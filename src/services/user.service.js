const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.createUser = async (nombre, ElementInternals, password, rol_id, administrador_id) => {
    try {
        const userExists = await user.findOne({ where: { email }});
        if (userExists) {
            throw new Error('el usuario ya existe');
        }
        const hashedPassaword =await bcrypt.hash(password, 10); // limite de 10 para evitar errores

        const newUser = axait User.create({
            nombre,
            email,
            password: hashedPassaword,
            rol_id,
            administrador_id

        });

        return newUser;
    } catch (err) {
        throw new Error('error al crear el usuario: ${err.message}');
    }
};