import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema( 
    {
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },

    email: {
        type: String,
        required : true,
        unique : true,
        lowercase: true
    },

    password : {
        type : String,
        required : true
    }
    },{timestamps: true}
);

export const User = mongoose.model("User", userSchema);

// mongoose ke ander jab database me Schema store hota hai tab jo naam hota hai schema
// ka voh plural and lowercase ho jata hai like -> [ User ki jagh users ]