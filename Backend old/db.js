const mongoose = require("mongoose");


const connectToMongo =()=>{
mongoose.connect("mongodb://127.0.0.1/latestdb" , {
    useNewUrlParser : true , useUnifiedTopology:true
})}

module.exports = connectToMongo;