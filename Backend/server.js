import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";
import path from 'path'
import authRoutes from "./Routes/auth.Route.js"
import messageRoutes from "./Routes/message.Route.js"
import userRouter from "./Routes/user.Route.js"

import connectToMongoDB from "./DB/connectToMongoDB.js"
import { app, server } from "./Socket/socket.js";

const __dirname = path.resolve()

const PORT = process.env.PORT || 8000

dotenv.config();

app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/", authRoutes)
app.use("/api/message/", messageRoutes)
app.use("/api/users/",userRouter)

app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"Frontend","dist","index.html"))

})


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running by ${PORT}`)
})