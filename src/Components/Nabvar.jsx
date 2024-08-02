function Nabvar() {
    return (
        <nav className="bg-cyan-600 flex justify-between w-screen h-16 ">
            <div>
                <h1 className="font-extrabold text-2xl mx-8 my-5 cursor-pointer">To Do App</h1>
            </div>
            <div className="flex my-7 font-medium gap-5">
                
                <ul className="flex gap-4 mr-10 text-slate-800 justify-center space-x-6 cursor-pointer  ">
                    <li className="hover:text-zinc-300 transition-all duration-700">Home</li>
                    <li className="hover:text-zinc-300 transition-all duration-700">My List</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nabvar