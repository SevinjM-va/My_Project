import React, { useEffect, useRef, useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router";




export const LoginPage = () => {
  const [error, setError] = useState('');
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate();
  const [data, setData] = useState(false);
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const emailIn = email.current.value;
    const passwordIn = password.current.value;

    const { data } = await axios.post('http://localhost:3500/login',{
      email: emailIn,
      password: passwordIn
    })
    localStorage.setItem('token', data.token)
    setData(data.success)
  }
  console.log('data',data);
  const handleClick=()=>{
    if(data){
      navigate('/')
    }
  }


  return (
    <div className="signupContainer">
      {/* {error? 
      <div className="errorContainer">
        <h2 className="errorTitle">Error</h2>
        <p className="errorMessage">This user is already exists!!!</p>
        </div> :  */}
      <div className="miniSignupContainer">
        <form onSubmit={(e)=>handleSubmit(e)}>
        <h3 className="signUpheader">Log in</h3>
          <div className="form-group">
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
          
          </div>
          <button type="submit" onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
       {/* }  */}
    </div>
  );
};
