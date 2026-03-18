import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setcards] = useState([])
  const fetchdata = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data)
  }
  useEffect(()=>{
fetchdata()
  },[])
  return (
    <>
    <Navbar/>
      <div className="container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <h1>{card.title}</h1>
            <p>{card.id}</p>
            <span>By : user id : {card.userId}</span>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
