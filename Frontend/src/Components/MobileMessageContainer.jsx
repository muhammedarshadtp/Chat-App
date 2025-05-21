import { IoMdArrowBack } from "react-icons/io";
import useConversation from "../Zustand/useConversation";
import MessageInputs from "./MessageInputs";
import Messages from "./Messages";

const MobileMessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  if (!selectedConversation) return null;

  return (
    <div className="h-full w-screen flex flex-col bg-slate-700">
      {/* Header */}
      <div className="bg-black  p-4 text-white flex items-center space-x-3 shadow-md">
        <button onClick={() => setSelectedConversation(null)}>
          <IoMdArrowBack size={24} />
        </button>
        <span className="font-semibold text-lg">: {selectedConversation.fullName}</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 bg-gray-400">
        <Messages />
      </div>

      {/* Message Input */}
      <div className="border-t px-4 py-2 bg-black ">
        <MessageInputs />
      </div>
    </div>
  );
};

export default MobileMessageContainer;
