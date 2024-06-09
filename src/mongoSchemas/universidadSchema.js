const mongoose = require('../config/mongoDb')
const Schema = mongoose.Schema;

const UniversiadSchema = Schema({
    nombre: {type: String, required: true},
    ubicacion: {type: String, require: true},
    alumnos: [{ type: Schema.Types.ObjectId, ref: 'Alumno' }],
},{collection: "universidad"})


UniversiadSchema.set('toJSON', {
    transform: ( _ , att)=> {
        delete att.__v;  
    }
})


module.exports = mongoose.model('Universidad', UniversiadSchema)