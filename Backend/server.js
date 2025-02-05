import express from "express"
import dotenv from "dotenv"

import authRoutes from "./Routes/auth.Route.js"
import connectToMongoDB from "./DB/connectToMongoDB.js"

const app = express()
const PORT = process.env.PORT || 3000
dotenv.config();

app.use(express.json())
app.use("/api/auth/", authRoutes)


// app.get("/", (req, res) => {
//     res.send("hello world!")

// })

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running by ${PORT}`)
})