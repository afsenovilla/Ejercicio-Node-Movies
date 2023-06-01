const express = require ("express");
const routesMovies = express.Router();
const{getMovies, postMovies, putMovies, deleteMovies} = require ("../controllers/movies.controllers");

routesMovies.get("/", getMovies)
routesMovies.post("/", postMovies)
routesMovies.put("/:id", putMovies)
routesMovies.delete("/:id", deleteMovies)

module.exports = routesMovies;