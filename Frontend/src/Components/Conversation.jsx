import { useSocketContext } from "../Context/socketContext";
import useConversation from "../Zustand/useConversation";

const Conversation = ({conversations,emoji,lastIdx}) => {
    const {selectedConversation,setSelectedConversation}= useConversation()

    const isSelected = selectedConversation?._id === conversations._id

    const {onlineUsers}= useSocketContext()
    const isOnline = onlineUsers.includes(conversations._id)
    return (
        <>
            <div className={`flex gap-4 items-center rounded p-2 py-2 hover:bg-gray-700 transition-colors duration-200 cursor-pointer 
                ${isSelected ? "bg-gray-700" : ""}
                `}
                onClick={()=> setSelectedConversation(conversations)}
                >
                <div className={`avatar ${isOnline ? "online" : ""}`} >
                    <div className="w-8 rounded-full">
                        <img src={conversations.profilePic} alt="image"/>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-white pl-2">{conversations.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>
           {!lastIdx &&  <div className="divider my-0 py-0 h-1"/>}

        </>
    )
}
export default Conversation;