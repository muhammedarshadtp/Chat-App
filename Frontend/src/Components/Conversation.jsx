
const Conversation = () => {
    return (
        <>
            <div className="flex gap-4 items-center rounded p-2 py-2 hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                <div className="avatar online">
                    <div className="w-8 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"  alt="image"/>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-400 pl-2">Arshad</p>
                        <span className="text-xl">🎃</span>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"/>

        </>
    )
}
export default Conversation;