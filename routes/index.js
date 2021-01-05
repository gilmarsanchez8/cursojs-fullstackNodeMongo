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
    );

    //Obtener un paciente en específico
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    //Actualizar un registro con ID específico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    //Eliminar un registro con ID específico
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}