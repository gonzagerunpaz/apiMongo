const express = require('express');
const universidadController = require('../controller/universidaddes.controller')
const router = express.Router();

router.get('/', universidadController.getUniversidades);

router.post('/', universidadController.saveUniversidad);

router.post('/:id/alumno', universidadController.addNewAlumnoToUniversidad);

router.post('/:idUni/alumno/:idAlu', universidadController.addExistAlumnoToUniversidad);

module.exports = router;