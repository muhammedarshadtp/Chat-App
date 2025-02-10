import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";

import authRoutes from "./Routes/auth.Route.js"
import messageRoutes from "./Routes/message.Route.js"
import userRouter from "./Routes/user.Route.js"

import connectToMongoDB from "./DB/connectToMongoDB.js"

const app = express()

const PORT = process.env.PORT || 4000

dotenv.config();

app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/", authRoutes)
app.use("/api/message/", messageRoutes)
app.use("/api/users/",userRouter)


// app.get("/", (req, res) => {
//     res.send("hello world!")

// })

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running by ${PORT}`)
})