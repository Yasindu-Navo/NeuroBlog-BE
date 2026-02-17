import mongoose from "mongoose";

//first need to create the schema
const commentSchema = new mongoose.Schema({

    blog: { type: mongoose.Schema.Types.ObjectId,ref:'blog', required: true },
    name: { type: String,required: true },
    content: { type: String,required: true },
    isPublished: { type: Boolean, default: false }

}, { timestamps: true });

//create model using that schema

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;