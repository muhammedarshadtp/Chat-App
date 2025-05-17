import { Link } from "react-router-dom";
import MessageContainer from "../../Components/MessageContainer";
import Sidebar from "../../Components/Sidebar";

const Home = () => {
    return (
        <div className="flex h-[100vh] md:h-[550px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter
             backdrop-blur-lg bg-opacity-0">
                    <Sidebar/>
                    <MessageContainer/>
        </div>
    )
}

export default Home;