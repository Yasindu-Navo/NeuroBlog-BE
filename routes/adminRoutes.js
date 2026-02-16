import express from 'express'
import { adminLogin } from '../controllers/adminController.js';
import { addBlog } from '../controllers/blogController.js';


 const adminRouter = express.Router();


adminRouter.post("/login", adminLogin)
adminRouter.post("/addBlog",addBlog)

export default adminRouter;