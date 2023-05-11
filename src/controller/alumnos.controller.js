const alumnosService  = require('../services/alumnos.service')

const getAlumnos = async(req, res) =>{  
    try {
        res.status(200).json(await alumnosService.findAll())
    } catch (err) {
        res.status(500).json(err)
    }
}

const saveAlumno = async (req, res) => {
    try {
        res.status(201).json(await alumnosService.save(req.body))
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = { getAlumnosController: getAlumnos, saveAlumnoController: saveAlumno}