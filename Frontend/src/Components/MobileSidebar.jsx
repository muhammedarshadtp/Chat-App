import Conversations from "./Conversations";
import Logout from "./Logout";
import MobileConversations from "./MobileConversation";
import Searchbar from "./SearchBar";



const MobileSidebar = () => {
 

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
    <Searchbar/>
    <div className="divider px-3"></div>
    <MobileConversations/>
    <Logout/>
</div>
  );
};

export default MobileSidebar;
