
import mongoose from "mongoose";

const connectToMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to MongoDB")
    } catch (error) {
        console.log("error conneting to mongoDB",error.message);
        
        
    }
}

export default connectToMongoDB;