const express = require('express')
const alumnoController = require('../controller/alumnos.controller')
const router = express.Router()

router.get('/', alumnoController.getAlumnosController)
router.post('/',alumnoController.saveAlumnoController)

module.exports = { alumnosRouter: router }
