import { useEffect } from "react";
import { useSocketContext } from "../Context/socketContext";
import useConversation from "../Zustand/useConversation";
import notificatoSound from "../assets/Sounds/notification.mp3"
const useListenMessage = ()=>{

    const {socket}=useSocketContext()
    const {message,setMessage} = useConversation()

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            const sound = new Audio(notificatoSound)
            sound.play()
            setMessage([...message,newMessage])
        })
        return ()=> socket?.off("newMessage")
    },[socket,message,setMessage])

}

export default useListenMessage; 