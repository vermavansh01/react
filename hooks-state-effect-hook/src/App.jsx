import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(() => {
    alert("count was changed")
    setColor(color + 1)
  }, [count])


  return (
    <>
      {/* <Navbar color={"red "+ color}/> */}
      <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>

    </>
  )
}

export default App
