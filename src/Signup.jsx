import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //  console.log(name,email,password)

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/signup", { name, email, password })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        name
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        email
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        password
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Signup</button>
      </form>
      <p>already have an account</p>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Signup;
