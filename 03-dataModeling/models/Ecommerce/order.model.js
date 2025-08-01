import mongoose from "mongoose";

const orderItemSchmea = new mongoose.Schema ( {
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },

    quantity : {
        type : Number,
        required : true,
    },

})

const orderSchema = new mongoose.Schema({

    orderPrice : {
        type : Number,
        required : true
    },

    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    orderItmes : {
        type : [orderItemSchmea],
    },

    address : {
        type : String,
        required : true
    },

    status : {
        type : String,
        enum : ["PENDING", "CANCELED", "DILIVERED"],
        default : "PENDING"
    }
   

}, {timestamps : true});

export const Order = mongoose.model("Order", orderSchema);