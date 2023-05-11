const Alumno = require('../mongoSchemas/alumnosSchema')

const findAll =  async ()=> {
    return await Alumno.find({})
}

const save = async (alumnoData) => {
    const alumno = new Alumno(alumnoData)
    return await alumno.save()
} 

module.exports = {findAll, save }