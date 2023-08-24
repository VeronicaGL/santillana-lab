const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/VACATIONS-PROYECT")
    .then(() => {
        console.log("connected to database")
    })
    .catch((err) => {
        console.log("error connecting to database")
    });

module.exports = mongoose;