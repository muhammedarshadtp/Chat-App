import Conversations from "./Conversations";
import Logout from "./Logout";
import Searchbar from "./SearchBar";

const Sidebar = () =>{
    return(
        <div className="border-r border-slate-500 p-4 flex flex-col ">
            <Searchbar/>
            <div className="divider px-3"></div>
            <Conversations/>
            <Logout/>
        </div>
    )
}
export default Sidebar;