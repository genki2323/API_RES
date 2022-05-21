var express = require('express');
//var mongoose = require('mongoose');
var app = express();

const { getConnection } = require("./db/db-connection-mongo");
const estadoEquipoRoutes = require("./routes/estadoEquipo")
const tipoEquipoRoutes = require("./routes/tipoEquipo")
const usuariosRoutes = require("./routes/usuarios")
const marcasRoutes = require("./routes/marcas")
const inventarioRoutes = require("./routes/inventario")

getConnection();

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));






//mongoose.connect("mongodb+srv://valencialaura:1041150033@proyectoinnovation.1qslw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
 //   console.log("Conectado")
//});


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    console.log(req)
    next();
});

app.use("/api/tipoEquipo", tipoEquipoRoutes)
app.use("/api/usuarios", usuariosRoutes)
app.use("/api/estadoEquipo", estadoEquipoRoutes)
app.use("/api/marcas", marcasRoutes)
app.use("/api/inventario", inventarioRoutes)


module.exports = app;

