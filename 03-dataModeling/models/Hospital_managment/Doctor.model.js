import mongoose from "mongoose";
import { Patient } from "./Patient.model";

const doctorSchema = mongoose.Schema({
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

    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Patient"
    }

}, {timestaps : true});

export const Doctor = mongoose.model("Doctor", doctorSchema);