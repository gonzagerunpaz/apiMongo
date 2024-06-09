const universidadService = require('../services/universidad.service')

const getUniversidades = async (req, res) => {
    try {
        const universidades = await universidadService.findAll();
        res.json(universidades);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const saveUniversidad =  async (req, res) => {
    try {
        const universidad = await universidadService.save(req.body);
        res.status(201).json(universidad);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addNewAlumnoToUniversidad  = async (req, res) => {
    try {
        const alumno = await universidadService.addNewAlumnoToUniversidad(req.params.id, req.body);
        res.status(201).json(alumno);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addExistAlumnoToUniversidad =  async (req, res) => {
    try {
        const alumno = await universidadService.addExistAlumnoToUniversidad(req.params.idUni, req.params.idAlu);
        res.status(201).json(alumno);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {getUniversidades, saveUniversidad, addNewAlumnoToUniversidad, addExistAlumnoToUniversidad };