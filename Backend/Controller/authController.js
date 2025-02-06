import User from "../Models/user.js"
import bcrypt from "bcryptjs"
import genareteTokenandSetCookies from "../Utils/genarateToken.js"

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password don't match" })
        }
        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "username already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilepic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            genareteTokenandSetCookies(newUser._id,res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilepic,
            })
        } else {
            return res.status(400).json({ error: "invalid user data" })
        }

    } catch (error) {
        console.log("error in signup controller ", error.messege)
        res.status(500).json({ error: "internal serevr error" })

    }

}

export const login = async (req, res) => {
    try {
        const{username,password}=req.body
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({error:"invalid username"})
        }
        const isPassword= await bcrypt.compare(password,user?.password || "")
        if(!isPassword){
            return res.status(400).json({error:"invalid password"})
        }

        genareteTokenandSetCookies(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilepic,
        })
    } catch (error) {
        console.log("error in login controller ", error.messege)
        res.status(500).json({ error: "internal serevr error" })
    }
    
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({messege:"Logout user successfully"})

        
    } catch (error) {
        console.log("error in Logout controller ", error.messege)
        res.status(500).json({ error: "internal serevr error" })
    }
}