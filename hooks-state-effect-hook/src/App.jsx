import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("hey welcome to my page")
  }, [])

  useEffect(() => {
    alert("count was changed")
  }, [count])
  

  return (
    <>
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
