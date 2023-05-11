const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.get("/api/alumnos", ( req, res )=>{ res.status(200).json({mensaje: 'Hola mundo!'})}  )

app.listen(PORT, ()=>{ console.log(`Ready on port ${PORT}`)})
