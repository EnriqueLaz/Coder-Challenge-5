const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

//PLANTILA FJS
app.engine('fjs', function (filePath, options, callback) {
    fs.readFile(filePath, (error, contenido) => {
        if (error) throw new Error(error)
        const contenidoRender = contenido
            .toString()
            .replace('{{nombre}}', options.nombre)
            .replace('{{apellido}}', options.apellido)
            .replace('{{titulo}}', options.titulo)

        return callback(null, contenidoRender)
    })
})

app.set('views', './src/views')
app.set('view engine', 'fjs')

app.get('/plantillas', (req, res) => {
    res.render('index', {
        titulo: 'PLANTILLA PERSONALIZADA',
        nombre: 'Johan',
        apellido: 'Perro',
    })
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
})