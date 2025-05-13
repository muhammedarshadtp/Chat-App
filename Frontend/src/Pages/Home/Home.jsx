import MessageContainer from "../../Components/MessageContainer";
import Sidebar from "../../Components/Sidebar";
import useConversation from "../../Zustand/useConversation";

const Home = () => {
    const { selectedConversation } = useConversation();

    return (
        <div className="flex w-full h-screen md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            {/* Sidebar: Show on desktop OR when no chat selected (mobile) */}
            <div className={`w-full md:w-[35%] ${selectedConversation ? 'hidden md:block' : 'block'}`}>
                <Sidebar />
            </div>

            {/* MessageContainer: Show on desktop OR when a chat is selected (mobile) */}
            <div className={`w-full md:w-[65%] ${selectedConversation ? 'block' : 'hidden md:block'}`}>
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
