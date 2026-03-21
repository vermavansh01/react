import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    (console.log("Navbaris redered"))
  return (
    <div>I am a {adjective}Navbar</div>,
    <button onClick={()=>{getAdjective()}}>change me {getAdjective()}</button>
  )
}

export default memo(Navbar)