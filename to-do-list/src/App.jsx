import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container bg-violet-300 text-center mx-auto my-4 p-4 rounded-xl ">
        <h1 className=' text-xl hover:font-bold  hover:shadow-xl'>Your Todos</h1>
      </div>
    </>
  )
}

export default App
