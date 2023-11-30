import React, { useEffect, useRef, useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate} from 'react-router-dom';

export const Signup = () => {
  const [message, setMessage] = useState('');
  let navigate = useNavigate();
  const [data, setData] = useState(false);

  const firstname = useRef()
  const lastname = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const firstnameIn = firstname.current.value;
    const lastnameIn = lastname.current.value;
    const usernameIn = username.current.value;
    const emailIn = email.current.value;
    const passwordIn = password.current.value;

    try {
    const { data } = await axios.post('http://localhost:3500/signup',{
      firstname: firstnameIn,
      lastname: lastnameIn,
      username: usernameIn,
      email: emailIn,
      password: passwordIn
    })
    if(data.success){;
    setMessage("Success")}
  } catch (error){setMessage(error)}
  
  }
  const handleClick=()=>{
    if(data){
      navigate('/')
    }
  }


  return (
    <div className="signupContainer">
      {message? 
      <div className="errorContainer">
        <h2 className="errorTitle">{'User successfully created'}</h2>
        </div> : 
      <div className="miniSignupContainer">
        <form onSubmit={(e)=>handleSubmit(e)}>
        <h3 className="signUpheader">Sign Up</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstname"
              ref={firstname}
              aria-describedby="emailHelp"
              placeholder="Enter Your First Name"
            />
            <input
              type="text"
              className="form-control"

              id="lastname"
              ref={lastname}
              aria-describedby="emailHelp"
              placeholder="Enter Your Last Name"
            />
            <input
              type="text"
              className="form-control"

              id="username"
              ref={username}
              aria-describedby="emailHelp"
              placeholder="Enter Your User Name"
            />
            <input
              type="email"
              className="form-control"
      
              id="email"
              ref={email}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              ref={password}
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I am agree with all conditions
            </label>
          </div>
          <button type="submit" onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      }
      
    </div>
  );
};
