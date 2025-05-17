import { TiMessages } from "react-icons/ti";
import MessageInputs from "./MessageInputs";
import Messages from "./Messages";
import useConversation from "../Zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../Context/authContext";

const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversation()

    useEffect(()=>{

        return ()=> setSelectedConversation(null)
    }, [setSelectedConversation])
    return (
        <div className="hidden md:flex md:min-w-[450px] flex-col">
            {!selectedConversation ? (<NoChatSelected />)
                :
                (<>
                    <div className="bg-slate-700 px-4 py-2 mb-2">
                        <span className="label-text">To:</span>
                        <span className="text-white font-bold">{selectedConversation.fullName}</span>
                    </div>
                    <Messages />
                    <MessageInputs />
                </>
                )}
        </div>
    )
}

export default MessageContainer;


const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    const name= authUser.fullName
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋🏻 {name} ❄️</p>
                <p>Select a chat to start message </p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}