const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URL);


const connection = mongoose.connection;
// console.log(connection);


connection.on("connnected",()=>{
    console.log(`MongoDB is connected`);
});



connection.on("error",(err)=>{
    console.log(err);
});

module.exports = connection;

