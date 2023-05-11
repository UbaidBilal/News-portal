const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    title : {
        type:String,
    },
    description : {
        type : String,
    },
    category : {
        type : String,
    },
    image : {
         type: String  
    }
    
})
module.exports = mongoose.model("Mynews",UserSchema)