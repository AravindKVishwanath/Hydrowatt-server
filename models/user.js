const mongoose = require('mongoose')

    ({
    Name : {
        type:String,
        unique:true,
        required:true,
    },
    Email:{
        type:String,
        unique:true,
        required:true,
    },
    Password:{
        type:String,
        required:true,
        unique:true,

    },
    profilePicture:{
        type:String,
        default:"",
    },
    Badges:{
        type:[],
        default:"",
    },
    DailyStreak:{
        type:Number,
        default:0,
    },
    MonthlyGoalStreak:{
        type:Number,
        default:0,
    },
    WaterConsumptionGoal:{
        type:Number,
        default:0,
    },
    ElectricityConsumptionGoal:{
        type:Number,
        default:0,
    },
    powerData : {
        type:[],
        default:""
    },
    waterData : {
        type : [],
        default:""
    },
    verificationToken:String,
})

const User = mongoose.model("User",userSchema);
module.exports = User;

