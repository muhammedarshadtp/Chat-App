import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../Hooks/useSendMessage";


const MessageInputs = ()=>{

        const {loading,sendMessage}=useSendMessage()
        const [message,setMessage]=useState("")
        const handleSubmit= async (e)=>{
            e.preventDefault()
            if(!message) return
            await sendMessage(message)
            setMessage("")
            
        }

    return (
        <form className="px-4 my-3 relative" onSubmit={handleSubmit}>
        <div className="w-11/12 relative">
            <input type="text" 
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-500 border-gray-600 outline-none text-white"
            placeholder="Send a Message"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
               
            />
            
        
        </div>
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center justify-center w-10 h-10 me-1 rounded-full  bg-zinc-500 transition-colors duration-200">
           {loading ? <span className="loading loading-spinner loading-md"></span> :  <IoMdSend className="h-5 w-5 text-white"/>}
            
            </button>
        </form>
    )
}

export default MessageInputs;