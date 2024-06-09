const express = require('express')
const alumnoController = require('../controller/alumnos.controller')
const router = express.Router()

router.get('/', alumnoController.getAlumnosController)
router.get('/:dni', alumnoController.getAlumnoByDniController)
router.post('/',alumnoController.saveAlumnoController)
router.delete('/:dni', alumnoController.deleteAlumnoByDniController)

module.exports = router 
