const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //como se intala la biblioteca
const dotenv = require('dotenv');
const user = require('../models/user.model');
const RolePermission = require('../models/rolePermission.model');

dotenv.config();

//llave secreta desde las variables de entorno
const SECRET_KEY = process.env.JWT_SECRET;

//servicio
exports.loginUser = async (email, password) => {
    try{
        //verifica si el usuario existe
        const user = await user.finOne({ where: { email }});
        if (!user) {  //si no lo encuentra me mostrata el comentario
            throw new Error('usuario no encontrado');
        }

        // verificar si la contraseña es correcta 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('contraseña incorecta');
        }

        //consultar los permisos del rol
        const rolePermission = await rolePermission.findAll({
            where: { rol_id: user.rol_id },
            attributes: ['permiso_id']
        });

        const permisos = rolePermission.map(rp => rp.permiso_id);

        //generar token jwt
        const token =jwt.sign(
            { id: user.id, nombre, email: user.email, rol_id: user.rol_id, permisos},
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        return token;
     } catch (error) {
        throw new Error(error.message || 'error al iniciar sesion');
     }
};
