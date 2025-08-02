import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
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
    },

    gender : {
        type: String,
        enum : ["M", "F", "U"],
        required : true
    },

    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Doctor"
    }
    
}, {timestamps : true})

export const Patient = mongoose.model("Patient" , patientSchema);