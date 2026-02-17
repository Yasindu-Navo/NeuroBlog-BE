import fs from 'fs'
import imageKIT from '../configs/imageKit.js';
import Blog from '../models/blog.js';


export const addBlog = async (req, res) => {

    try {
    
    //getting data from request 
    const { tittle, subTittle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file
    
    //checking all fields are exsits

    if (!tittle || !description || !category || !isPublished) {
        return res.send({ sucess: false, message: "Missing required fields" })
        
    }

        //convert the image into BASE64
        const imageBUffer = fs.readFileSync(imageFile.path)

        //uplaod to the imageKIT
        const response = await imageKIT.upload({
            file: imageBUffer, 
            fileName: imageFile.originalname,
            folder : '/blogs'
            
        })

        //optimization through imagekit URL Transformation

        const optimizedURL = imageKIT.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto' },
                { format: 'webp' },
                {width:'1280'}
                
            ]
        })

        //final one for save in DB
        const image = optimizedURL;

        //save the data in the DB

        await Blog.create({ tittle, subTittle, description, category, image, isPublished })
       return res.json({ sucess: true, message: "Blog added successfully" });



       

} catch (error) {
    res.json({sucess: false, message: error.message })
}


    
    
};


export const getAllBlogs = async (req,res) => {
    
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({sucess:true,blogs})
    } catch (error) {
        res.json({sucess:false,message:error.message})
    }

}

export const getBlogByID = async (res,req) => {
    
    try {
        const { blogId } = req.parse;
        const blog = await Blog.findById(blogId)

        if (!blog) {
            return res.json({ sucess: false, message: "Blog cannot find" } )
        } else {
            return res.json({sucess:true},blog)
        }
        
    } catch (error) {
        return res.json({ sucess: false, message: error.message } )
    }
}



export const deleteBlogByID = async (res,req) => {
    
    try {
        const { id } = req.body;
        
        await Blog.findByIdAndDelete(id);
        return res.json({ sucess: true, message: "Blog delete sucessfully" })

        
    } catch (error) {
        return res.json({ sucess: false, message: error.message } )
    }
}

export const togglePublished = async (res, req) => {
    
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.json({sucess:false,message:"Blog cannot find"})
        } 

        blog.isPublished = !blog.isPublished
        await blog.save();
        return res.json({sucess:true,message:"Blog status updated"})

    } catch (error) {
         return res.json({ sucess: false, message: error.message } )
    }
}