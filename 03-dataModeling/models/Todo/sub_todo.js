import mongoose from "mongoose";

const subTodoSchmea = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },

    markComplete : {
        type : Boolean,
        default : false
    },

    createdBY : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
}, {timestamps : true});

export const SubTodo = mongoose.model("SubTodo", subTodoSchmea);