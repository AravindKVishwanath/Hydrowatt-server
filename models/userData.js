const mongoose = require('mongoose')

const userDataSchema  = new mongoose.Schema({
    Name : {
        type : String,
        unique:true,
        required:true,
    },
    userId:{
        type : String,
        unique:true,
    },
    powerData : {
        type:[],
        default:""
    },
    waterData : {
        type : [],
        default:""
    }
})

const UserData = mongoose.model("UserData",userDataSchema);
module.exports = UserData;