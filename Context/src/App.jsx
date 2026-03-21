import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{count,setCount}}> 
<Navbar/>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </counterContext.Provider>

    </>
  )
}

export default App
