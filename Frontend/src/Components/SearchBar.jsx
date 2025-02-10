import { useState } from "react";
import useConversation from "../Zustand/useConversation";
import useGetConversation from "../Hooks/useGetConversation";
import toast from "react-hot-toast";


const Searchbar = () => {
    const [search,setSearch]=useState('')
    const {setSelectedConversation}=useConversation()
    const {conversation}=useGetConversation()

    const handleSearch = (e)=>{
        e.preventDefault()
        if(!search) return
        const foundConversation = conversation.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
        if(foundConversation){
            setSelectedConversation(foundConversation)
            setSearch('')
        }else {
            toast.error("No such user found!!")
        }
    }
    return (
        <form className="flex items-center gap-2" onSubmit={handleSearch}>
            <label className="input input-bordered flex items-center gap-2 rounded-xl">
                <input type="text" className="grow" placeholder="Search.."
                value={search} 
                onChange={(e)=> setSearch(e.target.value)}
                />
            </label>
            <button type="submit" className="btn btn-circle my-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

        </form>
    )
}

export default Searchbar;