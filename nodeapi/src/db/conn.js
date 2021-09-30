const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/new")
    .then(() => {
        console.log("connection succesfull");
    }).catch(() => {
        console.log("no connect")
    })