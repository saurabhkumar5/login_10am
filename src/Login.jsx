import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <h1>Login</h1>
    <form>
        email<input type='email' placeholder='enter your email'/><br/><br/>
        password<input type='password' placeholder='enter your password'/><br/><br/>
        <button>Login</button>
    </form>
    <p>doesnt have an account</p>
      <Link to="/">signup</Link>
    </>
  )
}

export default Login