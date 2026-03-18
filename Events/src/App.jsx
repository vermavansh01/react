import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("Harry")
  const [form, setForm] = useState({email:"",phone:""})
  const handleClick =()=>{
    alert("Hey i am clicked")
      console.log(form)
  }
  // const handleMouseOver =()=>{
  //   alert("Hey i am MouseOver")
  // }
  const handleChange =(e)=>{
    // setValue(e.value)
    // setForm(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
  
  }

  return (
    <>
    <div className="Button">
      <button onClick={handleClick}>clickme</button>
    </div>
    {/* <div className="red" onMouseOver={handleMouseOver}>
      I am a red div
    </div> */}
    <input type="text" name='email' value={form.email} onChange={handleChange}/>
    <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
