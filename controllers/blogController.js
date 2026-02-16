import fs from 'fs'
import imageKIT from '../configs/imageKit.js';


export const addBlog = async (req, res) => {

    try {
    
    //getting data from request 
    const { tittle, subTittle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file
    
    //checking all fields are exsits

    if (!tittle || !description || !category || !imageFile || !isPublished) {
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

       

} catch (error) {
    
}


    
    
};


