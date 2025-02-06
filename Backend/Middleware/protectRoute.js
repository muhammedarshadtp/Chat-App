
import jwt from "jsonwebtoken"
import User from "../Models/userModel.js"

const protectRoute= async (req,res,next)=>{
    try {

        const token= req.cookie.jwt
        if(!token){
            return res.status(401).json({error:"Unauthorized - no token provided "})
        }
        
        const decoded = jwt.verify(token, process.env.GENERATE_TOKEN )
        if(!decoded){
            return res.status(401).json({error:"Unauthorized - Invalid Token"})
        }

        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(404).json({error:"User not found"})
        }
        req.user=user
        next()
    } catch (error) {
        console.log("error in pricterRoute",error.messege)
         res.status(500).json({error:"internal server error"})
    }
}

export default protectRoute;