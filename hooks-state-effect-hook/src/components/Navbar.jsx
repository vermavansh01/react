import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

  // Run on every render
  useEffect(() => {
    alert("Hey i will run on every render..")
  },)

  // run only on first render
  useEffect(() => {
    alert("hey welcome to my page. This is my first render..")
  }, [])

  // Run only on certain value changed
  useEffect(() => {
    alert("hey i am running because color was change ..")
  }, [color])

  // Example of cleanup function 
    useEffect(() => {
    alert("hey welcome to my page. This is my first render of app.jsx..")

  return ()=>{
    alert ("component was unmounted")
  }
  }, [])
  

  return (
    <div>
      i am Navbar of {color} color hehehe.....
    </div>
  )
}

export default Navbar