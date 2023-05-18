const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/alumnos'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log(`Conexion a mongo con exito`)
}).catch ( (err)=> {
    console.log(`Error al conectarse a mongo`, err)
})


module.exports = mongoose