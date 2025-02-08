import MessegeContainer from "../../Components/MessegeContainer";
import Sidebar from "../../Components/Sidebar";

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter
             backdrop-blur-lg bg-opacity-0">
                <Sidebar/>
                <MessegeContainer/>
            
        </div>
    )
}

export default Home;