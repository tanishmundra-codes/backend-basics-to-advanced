import mongoose from "mongoose";

const todoSchmea = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        }, 

        completed : {
            type: Boolean,
            default : false
        },

        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User" // this name must be same as user database
        },

        subTodo : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "SubTodo"
            }
        ]

    }, {timestamps : true}
);

export const Todo = mongoose.model("Todo", todoSchmea );