const Movie = require("../models/movies.model");

const getMovies  = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies
);
    } catch (error) {
        return res.status(500).json(error)
    }
}
const postMovies  = async (req, res) => {
    try {
     const newMovie = new Movie(req.body);
     const createdMovie = await newMovie.save();
     return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error)
    }
}
const putMovies  = async (req, res) => {
    try {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updatedMovie = await Movie.findByIdAndUpdate (id, putMovie, {new:true});
        if (!updatedMovie) {
            return res.status(404).json({message:"No existe una película con este ID"})
        }
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deleteMovies  = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteMovie = await Movie.findByIdAndDelete (id);
        if (!deleteMovie) {
            return res.status(404).json({message:"No existe una película con este ID"})
        }
        return res.status(200).json({message: `Elemento ${id} borrado`});
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getMovies, postMovies, putMovies, deleteMovies}