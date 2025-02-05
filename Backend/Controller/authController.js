import User from "../Models/user.js"

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

        const boyPrifilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser= new User({
            fullName,
            username,
            password,
            gender,
            profilepic: gender === "male" ? boyPrifilePic : girlProfilePic
        })
        await newUser.save()

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilepic,
        })

    } catch (error) {
        console.log("error n signup controller ",error.messege)
        res.status(500).json({error:"internal serevr error"})

    }

}

export const login = (req, res) => {
    res.send("this is login")
}

export const logout = (req, res) => {
    res.send("this logout page")
}