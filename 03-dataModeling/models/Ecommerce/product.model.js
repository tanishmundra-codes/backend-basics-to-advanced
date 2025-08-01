import mongoose from "mongoose";

const productSchmea = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    discription : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        default : 0,
    },

    stock : {
        type : Number,
        default : 0
    },

    productImage : {
        type : String
    },
    
    catogery : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Catogery",
        required : true
    },

    Owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }

}, {timestamps : true});

export const Product = mongoose.model("Product", productSchmea);