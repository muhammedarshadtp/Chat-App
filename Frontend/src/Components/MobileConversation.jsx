import { CircleLoader } from "react-spinners";
import useGetConversation from "../Hooks/useGetConversation";
import Conversation from "./Conversation";
import { getRadomEmojis } from "../Utils/emoji";
import { useState } from "react";
import MobileMessageContainer from "./MobileMessageContainer";

const MobileConversations = ()=>{

    const [showMessege,setShowMessege]=useState(false)

        const {loading,conversation}=useGetConversation();
        console.log(conversation)

        const handleClick=()=>{
            setShowMessege(true)
        }

    return (
        <>
        {!showMessege ? (
        <div className="py-2 flex flex-col overflow-y-scroll no-scrollbar h-full" onClick={handleClick} >

            {conversation.map((conversations,Idx)=>(
                <Conversation 
                key={conversations._id}
                conversations={conversations}
                emoji={getRadomEmojis()}
                lastIdx={Idx === conversation.length - 1}
                />

            ))}
            
        

        {loading ? <CircleLoader size={100} color="#ffffff"/> : null}
        </div>
        ) : (
            <MobileMessageContainer/>
        )}
        </>
    )
}
export default MobileConversations;