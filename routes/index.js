const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function(){
    //Agrega pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    //Obtener pacientes de la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )
    return router;
}