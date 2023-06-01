const mongoose = require ("mongoose");
DB_URL = "mongodb+srv://root:root@cluster0.4vaqxuf.mongodb.net/albertoDB?retryWrites=true&w=majority";
const connect = async() => {
    try {
        const db = await mongoose.connect(DB_URL);
        const{name, host} = db.connection;
        console.log(`connected to ${name} db inhost${host}`);
        //console.log("connected to", name, "db inhost", host); (Esto es otra forma de hacer lo de arriba)
    } catch (error) {
        console.log("Error", error);
        //console.log(`Error, ${error}`); (Esto es otra forma de hacer lo de arriba)
    }
}

module.exports = {connect}