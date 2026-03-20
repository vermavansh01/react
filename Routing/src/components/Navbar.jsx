import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className='flex border border-black bg-black justify-end text-white'>
                <ul className='flex '>
                    <NavLink className={(e)=>{
                        return e.isActive?"bg-red-500" :""
                    }} to="/"><li className='h-[40px] p-2'>Home</li></NavLink>
                    <NavLink className={(e)=>{
                        return e.isActive?"bg-red-500" :""
                    }} to="/About"><li className='h-[40px] p-2'>About</li></NavLink>
                    <NavLink className={(e)=>{
                        return e.isActive?"bg-red-500" :""
                    }} to="/Login"><li className='h-[40px] p-2'>Login</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar