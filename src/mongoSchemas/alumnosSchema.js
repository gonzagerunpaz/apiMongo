const mongoose = require('../config/mongoDb')

const mail = mongoose.Schema({
    mail: {type: String, require: true},
    tipo: {type: String}
})

const alumnoSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    dni: { type: Number, required: true},
    libreta: {type: Boolean, default: false},
    mails: [ mail  ],
},{collection: "alum"})


alumnoSchema.set('toJSON', {
    transform: ( _ , att)=> {
        delete att.__v;  
    }
})

module.exports = mongoose.model('Alumno', alumnoSchema)