const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const  moviesSchema = new Schema(
    {
        nombre: {type:String, required:true},
        plataforma: [{type:String, required:true}],
        lanzamiento: {type:Number, required:false},
        desarrollador: [{type:String, required:false}],
        multiplayer: {type:Boolean},
    }
)

const Movie = mongoose.model ("Movies", MoviesSchema);

module.exports = Movie;