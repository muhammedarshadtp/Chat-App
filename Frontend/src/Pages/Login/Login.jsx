import { useState } from "react";
import { Link } from "react-router-dom"; 
import useLogin from "../../Hooks/useLogin";
import { CircleLoader } from "react-spinners";

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {loading,login}=useLogin()
    const handleSubmitFunction= async (e)=>{
        e.preventDefault()
        await login(username,password)
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
             backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-white">🔑 Login
                    <span className="text-blue-400"> ChatApp</span>
                </h1>
                <br />
                <form onSubmit={handleSubmitFunction}>
                    <div className="">
                        <span className="text-base label-text text-white">Username</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Enter Username" 
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="m-2">
                        <span className="text-base label-text text-white">Password</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder=" Enter Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <Link to="/signup" className="text-sm hover:underline mt-2 inline-block hover:text-blue-400">
                        Don't have an account?
                    </Link>

                    <br />
                    <br />
                    <div className=" w-full flex justify-center" >
                        <button className="btn glass w-1/2" disabled={loading}>
                            {loading ?  <CircleLoader size={30} color="#ffffff"/>  : "Login"}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H4a1 1 0 100 2h6.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;