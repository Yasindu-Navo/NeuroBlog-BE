import express from 'express'

import { addBlog, addComment, deleteBlogByID, getAllBlogs, getBlogByID, getBlogComments, togglePublished } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';


 const blogRouter = express.Router();



blogRouter.post("/add",upload.single('image'),auth, addBlog)
blogRouter.get("/all", getAllBlogs)
blogRouter.get("/:blogId", getBlogByID)
blogRouter.post("/delete", auth,deleteBlogByID)
blogRouter.post("/toggle-publish",auth, togglePublished)
blogRouter.post("/add-comment",addComment)
blogRouter.get("/comments",getBlogComments)


export default blogRouter;