import { useState } from "react";
import useConversation from "../Zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () =>{

        const [loading,setLoading]=useState(false)
        const {message,setMessage,selectedConversation}=useConversation()

    const sendMessage = async (msg) =>{
        setLoading(true)
        try {
            const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({message:msg})
            })
            const data = await res.json()
            if(data.error) {
                throw new Error(data.error)
            }

            setMessage([...message,data])
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

    }
    return {loading,sendMessage}

}

export default useSendMessage;