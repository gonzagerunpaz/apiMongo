const Alumno = require('../mongoSchemas/alumnosSchema')
const Universidad = require('../mongoSchemas/universidadSchema');

const findAll =  async ()=> {
    return await Universidad.find({}).populate('alumnos').exec();
}

const save = async (universidadData) => {
    const universidad = new Universidad(universidadData)
    return await universidad.save()
} 

const addNewAlumnoToUniversidad = async (universidadId, alumnoData) => {
    const alumno = new Alumno(alumnoData);
    const savedAlumno = await alumno.save();

    const universidad = await Universidad.findById(universidadId);
    if (!universidad) {
        throw new Error('Universidad no encontrada');
    }

    universidad.alumnos.push(savedAlumno._id);
    await universidad.save();

    return savedAlumno;
};

const addExistAlumnoToUniversidad = async (universidadId, alumnoId) => {

    const universidad = await Universidad.findById(universidadId);
    if (!universidad) {
        throw new Error('Universidad no encontrada');
    }

    const alumno = await Alumno.findById(alumnoId);
    if (!alumno) {
        throw new Error('Alumno no encontrado');
    }

    universidad.alumnos.push(alumno._id);
    await universidad.save();

    return alumno;
};

module.exports = { findAll, save, addNewAlumnoToUniversidad, addExistAlumnoToUniversidad };
