import User from "../Models/userModel.js"

export const getUserFromSidebar=async(req,res)=>{
    try {

        const loggedInUSer= req.user._id
        const filteredUser= await User.find({_id:{$ne:loggedInUSer}}).select("-password")
        res.status(200).json(filteredUser)
        
    } catch (error) {
        console.log("error in getUserFromSidebar controller ", error.message)
        res.status(500).json({ error: "internal serevr error" })
    }
}