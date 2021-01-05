//Cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {
    //Insertar en BD
    res.json({mensaje: 'El cliente se agregó correctamente'});
}