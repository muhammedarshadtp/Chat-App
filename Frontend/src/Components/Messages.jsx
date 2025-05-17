import { useEffect, useRef } from "react";
import useGetMessage from "../Hooks/useGetMessage";
import MessageSkeleton from "../skeleton/messageSkeleton";
import Message from "./Message";
import useListenMessage from "../Hooks/useListenMessage";


const Messages = () => {
    const { message, loading } = useGetMessage()
    const lastMessageRef = useRef()
    useListenMessage()

    useEffect(()=>{
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
        },10)
    },[message])
    return (
        <div className="px-4 flex-1 overflow-y-scroll no-scrollbar h-full">
            {!loading && Array.isArray(message) && message.length > 0
                && message.map((msg,) => (
                    <div key={msg._id} ref={lastMessageRef} >
                        <Message message={msg} />
                    </div>
                ))}
            {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && message.length === 0 &&
                (
                    <div className="text-center">Send a message to start the conversation</div>
                )}

        </div>
    )
}

export default Messages;