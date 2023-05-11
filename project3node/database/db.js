const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
const connectDB = async ()=>{
//for connecting database
try {
mongoose.connect("mongodb://127.0.0.1:27017/Newsapp",{useNewUrlParser:true})
mongoose.connection.once("open",()=>
    console.log("Database Connnected"));
}catch (error) {
    console.log(error);
    process.exit(1)
}
}
module.exports = connectDB;
