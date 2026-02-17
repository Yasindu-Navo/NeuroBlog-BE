import express from 'express'
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboardData } from '../controllers/adminController.js';
import { addBlog } from '../controllers/blogController.js';
import auth from '../middlewares/auth.js';


 const adminRouter = express.Router();


adminRouter.post("/login", adminLogin)
adminRouter.get("/blogs",auth, getAllBlogsAdmin)
adminRouter.get("/comments",auth, getAllComments)
adminRouter.get("/dashboard",auth, getDashboardData)
adminRouter.post("/delete-comment",auth, deleteCommentById)
adminRouter.post("/approve-comment",auth, approveCommentById)

export default adminRouter;