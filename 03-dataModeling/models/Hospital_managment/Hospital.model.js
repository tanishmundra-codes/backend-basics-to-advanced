import mongoose from "mongoose";

const hospitalSchmea = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    address: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumner: {
        type: Number,
        required: true,
        unique: true
    },

    numberOfPatient : {
        type : Number,
        required : true
    },

    numberOfDoctor : {
        type : Number,
        required : true
    },

    numberOfStaff : {
        type : Number,
        required : true
    },

}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchmea);