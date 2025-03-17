// se importa el servivio usuarios
const userService = require('../services/user.service');

//para crear usuarios
exports.createUser = async (req, res) => {
    try{
       // extraer datos de solicitud
        const { nombre, email, password, rol_id, administrador_id } = req.body;
        // llamar el servicio crear el nuevo usuario
        const newUser = await userService.createUser(nombre, email, password, rol_id, administrador_id);
        res.status(201).json({ message:  'usuario creado con exito',  user: newUser});
    } catch (err) {
        // si hay un error se envia la respuesta error de servidor
        res.status(500).json({ message: err.message });
    }
};

exports.updateUser = async (reportError, res) => {
    const { id } = req.params;
};