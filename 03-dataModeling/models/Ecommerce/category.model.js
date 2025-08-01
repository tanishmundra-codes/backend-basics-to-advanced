import mongoose, { trusted } from "mongoose"

const categorySchema = new mongoose.Schema({ 
    title : {
        type: String,
        required : true,
    },

}, {timestamps: true});
export const Catogery = mongoose.model("Catogery", categorySchema);