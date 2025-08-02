import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        lowercase : true
    },

    email : {
         type : String,
        required : true,
        lowercase : true
    },

    address : {
        type: String,
        required : true,
        unique : true
    },

    phoneNumner : {
        type : Number,
        required : true,
        unique : true
    }
    
}, {timestamps : true})

export const Staff = mongoose.model("Staff" , staffSchema);