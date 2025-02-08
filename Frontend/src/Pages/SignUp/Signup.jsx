import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";
import { CircleLoader } from "react-spinners";


const Signup = () => {

    const[input,setInput]=useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:'',
    })

    const handleCheckBoxChandge=(gender)=>{
            setInput({...input,gender})

    }
    const {loading,signup}=useSignup()

    const handleSubmit= async(e)=>{
        e.preventDefault()
        await signup(input)
    }

    return (
        <div className="flex flex-col justify-center items-center w-1/3 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
             backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-white">🫂 SignUp
                    <span className="text-blue-400 m-2"> ChatApp</span>
                </h1>
                <form className="m-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="">
                            <span className="text-base label-text text-white">Full Name</span>
                            <label className="input input-bordered flex items-center gap-2 w-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-4 w-4  opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Enter FullName"
                                value={input.fullName}
                                onChange={(e)=> setInput({...input,fullName:e.target.value})} 
                                />
                            </label>
                        </div>
                    </div>
                    <div className="m-2">
                        <span className="text-base label-text text-white">Username</span>
                        <label className="input input-bordered flex items-center gap-2 w-auto">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Enter Username"
                            value={input.username}
                            onChange={(e)=> setInput({...input,username:e.target.value})}
                            />
                        </label>
                    </div>

                    <div className="m-2">
                        <span className="text-base label-text text-white">Password</span>
                        <label className="input input-bordered flex items-center gap-2 w-auto">

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
                            value={input.password}
                            onChange={(e)=> setInput({...input,password:e.target.value})}
                            />
                        </label>
                    </div>
                    <div className="m-2">
                        <span className="text-base label-text text-white">ConfirmPassword</span>
                        <label className="input input-bordered flex items-center gap-2 w-auto">

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
                            <input type="password" className="grow" placeholder=" Enter ConfirmPassword" 
                            value={input.confirmPassword}
                            onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
                            />
                        </label>
                    </div>
                    <GenderCheckBox onCheckBoxChange={handleCheckBoxChandge} selectedGender={input.gender} />

                    <Link to="/login" className="text-sm hover:underline mt-2 inline-block hover:text-blue-400">
                        Already have an account ?
                    </Link>

                    <br />
                    <br />
                    <div className=" w-full flex justify-center" >
                        <button className="btn glass w-1/2" disabled={loading}>
                            
                            {loading ?  <CircleLoader size={30} color="#ffffff"/> : "SignUp"}
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

export default Signup;

