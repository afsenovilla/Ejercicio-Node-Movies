const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const  moviesSchema = new Schema(
    {
        title: {type:String, required:true},
        director: {type:String, required:true},
        year: {type:Number, required:false},
        genre: {type:String, required:false},
    }
)

const Movie = mongoose.model ("Movies", moviesSchema);

module.exports = Movie;