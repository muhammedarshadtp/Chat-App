import { TbLogout2 } from "react-icons/tb";
import { CircleLoader } from "react-spinners";
import useLogout from "../Hooks/useLogout";

const Logout = () =>{
  const {loading,logout}=useLogout()
    return(
        <div className="mt-auto">    
        {!loading  ? (
          <TbLogout2 className="w-6 h-6 cursor-pointer text-white" onClick={logout} />
        ) : (
          <CircleLoader size={30} color="#ffffff" />
        )}      
          
        </div>
    )
}

export default Logout;