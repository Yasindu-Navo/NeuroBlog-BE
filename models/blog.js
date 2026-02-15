import mongoose from "mongoose";

//first need to create the schema
const blogSchema = new mongoose.Schema({
    tittle: { type: String, required: true },
    subTittle: { type: String },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isPublished: { type: Boolean, required: true }
}, { timestamps: true });

//create model using that schema

const Blog = mongoose.model('blog', blogSchema);

export default Blog;