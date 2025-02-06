
import mongoose from "mongoose";

const messageSchema= new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    recevierId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:tru,
    },
    messege:{
        type:String,
        require:true,
    }
},
{timestamps:true})

const Messege= mongoose.model("Messege",messageSchema)

export default Messege;