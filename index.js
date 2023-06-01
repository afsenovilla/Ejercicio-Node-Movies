const express = require ("express");
const PORT = 4000;
const app = express ();
const {connect} = require ("./src/utils/database.js");
const routesMovies = require("./src/api/routes/movies.routes.js"); // Importación de rutas

connect();
app.use (express.json())
app.use (express.urlencoded({extended:false}))
app.use ("/movies", routesMovies)
app.use("/", (req, res) => (res.send("Todo en orden")));
app.listen(PORT, () => console.log("Estamos escuchando en el puerto: " +PORT));
//app.listen(PORT, () => console.log(`Estamos escuchando en el puerto: ${PORT}`)); (Esto es otra forma de hacer lo de arriba)