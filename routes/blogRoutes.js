import express from 'express'

import { addBlog, getAllBlogs } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';


 const blogRouter = express.Router();



blogRouter.post("/add",upload.single('image'),auth, addBlog)
blogRouter.get("/getBlogs",auth, getAllBlogs)

export default blogRouter;