const mongoose = require('mongoose')

const URI ='mongodb://localhost:27017/alumnos'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log(`Conexion a mongo con exito`)
}).catch ( (err)=> {
    console.log(`Error al conectarse a mongo`, err)
})


module.exports = mongoose