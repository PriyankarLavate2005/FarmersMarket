import React from 'react';
import { useState } from 'react';
import './Login.css';
import axios from 'axios'
 

function Login() {
  async function Submitdata(e){
    e.preventDefault()
    try{
      await axios.post("http://localhost:8000/signup",{
        password,phone
    }).then(res=>{
      if (res.data=='ok'){
        alert("You sucessfully Logged in")
      }
      else{
        alert("something went wrong")
      }
    })
    }
    catch(e){
      console.log("something went wrong")
    }
  }
  const [phone,setphone]=useState('')
 const [password,setpassword]=useState('')
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" placeholder="Enter your phone number" onChange={(e)=>{setphone(e.target.value)}} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
        <button type="submit" onClick={Submitdata}>Login</button>
      </form>
      <p>
        If you don't have an account, <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
}

export default Login;
