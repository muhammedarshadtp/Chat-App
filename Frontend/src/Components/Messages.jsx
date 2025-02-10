import { useEffect, useRef } from "react";
import useGetMessage from "../Hooks/useGetMessage";
import MessageSkeleton from "../skeleton/messageSkeleton";
import Message from "./Message";


const Messages = () => {
    const { message, loading } = useGetMessage()
    const lastMessageRef = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
        },10)
    },[message])
    return (
        <div className="px-4 flex-1 overflow-y-scroll no-scrollbar h-full">
            {!loading && message.length > 0
                && message.map((message,) => (
                    <div key={message._id} ref={lastMessageRef} >
                        <Message message={message} />
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