import MessageContainer from "../../Components/MessageContainer";
import Sidebar from "../../Components/Sidebar";
import MobileSidebar from "../../Components/MobileSidebar";
import MobileMessageContainer from "../../Components/MobileMessageContainer";
import useConversation from "../../Zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="h-[100vh] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      
      {/* Mobile View */}
      <div className="flex md:hidden h-full w-full">
        {!selectedConversation ? <MobileSidebar /> : <MobileMessageContainer />}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex h-full w-full">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
