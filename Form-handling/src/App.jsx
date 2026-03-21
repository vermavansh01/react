import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting, },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }
  const onSubmit = async (data) => {
    // await delay(4) // simulating network delay
    let r = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    let res = await r.text()
    console.log(data, res)
    // if (data.username ==="mohit"){
    //   setError("myform",{message:"username is  invalid"})
    // }else if (data.username ==="vansh"){
    //   setError("blocked",{message:"This user is blocked"})
    // }
  }

  return (
    <>

      <div className="form">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="login"><h1>Login</h1></div>
          {isSubmitting && <div className='load'>Submiting......</div>}
          <input  {...register("username", { required: true, minLength: { value: 3, message: "Min-length is 3" }, maxLength: { value: 12, message: "Max-length is 12" } })} type="text" id="username" placeholder='username' />
          {errors.username && <div className='red'>{errors.username.message}</div>}

          <input  {...register("password", { required: true, minLength: { value: 8, message: "Min-length is 8" } })} type="password" id="password" placeholder='password' />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="submit" id="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
