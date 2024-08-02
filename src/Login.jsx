import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Login() {
     const [email,setEmail]   = useState();
     const [password,setPassword]   = useState();

     const navigate = useNavigate()

    //  console.log(email,password)
      
     const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post("http://localhost:5000/login", {email, password })
      .then((res)=>{
        console.log(res)
        if(res.data==="success"){
          navigate('/home')
        }
      })
     }


  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        email<input type='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        password<input type='password' placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
        <button>Login</button>
    </form>
    <p>doesnt have an account</p>
      <Link to="/">signup</Link>
    </>
  )
}

export default Login