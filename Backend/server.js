import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./Routes/auth.Route.js"
import messegeRoutes from "./Routes/messege.Route.js"
import userRouter from "./Routes/user.Route.js"

import connectToMongoDB from "./DB/connectToMongoDB.js"

const app = express()

const PORT = process.env.PORT || 3000

dotenv.config();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/", authRoutes)
app.use("/api/messege/", messegeRoutes)
app.use("/api/users/",userRouter)


// app.get("/", (req, res) => {
//     res.send("hello world!")

// })

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running by ${PORT}`)
})