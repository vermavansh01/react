import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card'>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" className='img' />
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.description}</p></div>
    </div>
  )
}

export default Card