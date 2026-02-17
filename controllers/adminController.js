import jwt from 'jsonwebtoken'
import Blog from '../models/blog.js';


export const adminLogin = async (req,res) => {
    try {
        const { email, password } = req.body;

        if (email !== process.env.ADMIN_Username || password !== process.env.ADMIN_Password) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET) 
       return res.json({success: true,token})
    } catch (error) {
        return res.json({ success: false, message: error.message });
        
    }
}


export const getAllBlogsAdmin = async (req, res) => {
    
    try {
        const blogs = await Blog.find({}).sort({createdAt:-1})
         return res.json({ success: true, blogs });

    } catch (error) {
         return res.json({ success: false, message: error.message });
    }
}




