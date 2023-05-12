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

const getAlumnoByDni = async (req, res) => {
    try {
        const alumno = await alumnosService.getAlumnoByDni(req.params.dni)
        if (alumno)
            res.status(200).json(alumno )
        else
            res.status(404).json({mensaje: `${req.params.dni} no se encuentra registrado`})
    } catch (err ) {
        res.status(500).json(err)
    }            
}

const deleteAlumnoByDni = async (req, res) => {
    try {
        res.status(200).json({
            mensaje:`${req.params.dni} fue borrado con exito`, 
            alumno: await alumnosService.deleteAlumnoByDni(req.params.dni)
        })
    } catch (err) {
        res.status(500).json(err) 
    }
}


module.exports = { 
    getAlumnosController: getAlumnos, 
    saveAlumnoController: saveAlumno, 
    getAlumnoByDniController: getAlumnoByDni,
    deleteAlumnoByDniController: deleteAlumnoByDni
}