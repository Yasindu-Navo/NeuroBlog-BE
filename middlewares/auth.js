import jwt from 'jsonwebtoken'

const auth = (req,res,next) => {
    //get the token
    const token = req.headers.authorization;

    //verify the token using JWT

    try {
        //verify using SECRET KEY
        jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch (error) {
        //if token invalid execute the catch part

        res.json({sucess:false,message:"Invalid Token"})
    }
}

export default auth;