const express = require('express')
require('dotenv').config()
const { alumnosRouter } = require('./routes/alumnos.route')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use('/api/alumnos', alumnosRouter  )

app.listen(PORT, ()=>{ console.log(`Ready on port ${PORT}`)})
