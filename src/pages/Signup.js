import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios'
function SignUp(){
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [phone,setphone]=useState('')
  const [zip,setzip]=useState('')
 async function Submitform(e){
  e.preventDefault()
  try{
    await axios.post("http://localhost:8000/signup",{
      email,password,name,phone,zip
  }).then(res=>{
    if (res.data=='ok'){
      alert("account created sucessfully ")
    }
    else{
      alert("something went wrong")
    }
  })
  }
  catch(e){
    console.log(e)
  }
 }
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form method='POST'>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name"  onChange={(e)=>{setname(e.target.value)}} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={(e)=>{setemail(e.target.value)}}   required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" onChange={(e)=>{setphone(e.target.value)}}  required />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input type="text" name="zip" onChange={(e)=>{setzip(e.target.value)}}  required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password"  onChange={(e)=>{setpassword(e.target.value)}} required />
        </div>
         <button className="signup-button" onClick={Submitform}>SignUp</button>
      </form>
      <p>Already have an account? <a href="/">Log in here</a></p>
    </div>
  );
}

export default SignUp;
