import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-violet-800 text-white py-2">
            <div className="logo">
                <span className="font-bold text-xl mx-8">I Task</span>
            </div>
            <ul className="flex mx-8 gap-8 text-xl">
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
            </ul>
        </nav>
    )
}

export default Navbar