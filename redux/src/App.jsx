import { useState } from 'react'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multiply} from './redux/counter/counterSlice'
import './App.css'

function App() {
 const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar />
      <div>
        <button
          // aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          Decrement
        </button>
          <span>Currently count is {count}</span>
        <button
          // aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button onClick={()=> dispatch(multiply())}>Multiply</button>
      </div>
    </>
  )
}

export default App
