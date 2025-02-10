import { useAuthContext } from "../Context/authContext";
import { extractTime } from "../Utils/extractTime";
import useConversation from "../Zustand/useConversation";

const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const formMe = message.senderId === authUser._id
    const chatClassName = formMe ? "chat-end" : "chat-start"
    const profilePic = formMe ? authUser.profilePic : selectedConversation.profilePic
    const bubbleBgColor = formMe ? "" : ""
    const extractedTime = extractTime(message.createdAt)

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-8 h-8 rounded-r-full bg-gre">
                    <img src={profilePic} alt="image icons" />
                </div>
            </div>
            <div className={`chat-bubble text-white font-normal ${bubbleBgColor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{extractedTime}</div>
        </div>
    )
}

export default Message;