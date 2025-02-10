import { CircleLoader } from "react-spinners";
import useGetConversation from "../Hooks/useGetConversation";
import Conversation from "./Conversation";
import { getRadomEmojis } from "../Utils/emoji";

const Conversations = ()=>{

        const {loading,conversation}=useGetConversation();
        console.log(conversation)

    return (
        <div className="py-2 flex flex-col overflow-y-scroll no-scrollbar h-full">

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
    )
}
export default Conversations;