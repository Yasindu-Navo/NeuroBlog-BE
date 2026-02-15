


export const addBlog = async (req, res) => {

    try {
    
    //getting data from request 
    const { tittle, subTittle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file
    
    //checking all fields are exsits

    if (!tittle || !description || !category || !imageFile || !isPublished) {
        return res.send({ sucess: false, message: "Missing required fields" })
        
    }



} catch (error) {
    
}


    
    
};


