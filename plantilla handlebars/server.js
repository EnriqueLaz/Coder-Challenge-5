const express = require("express")
const app = express()
const public = require("./public")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const { engine } = require("express-handlebars")
app.engine('hbs', engine())


app.set("view engine", "hbs")
app.set("views", "./src/views")


app.get("/", (req, res) => {
    res.render("productos")
})

app.use("/api", public);


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
})