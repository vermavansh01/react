import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
        </ul>
        <div className="img">
            <img src="1.jpg" alt="" />
        </div>
    </nav>
  )
}

export default Navbar