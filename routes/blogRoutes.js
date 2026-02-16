import express from 'express'

import { addBlog } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';


 const blogRouter = express.Router();



blogRouter.post("/add",upload.single('image'),addBlog)

export default adminRouter;