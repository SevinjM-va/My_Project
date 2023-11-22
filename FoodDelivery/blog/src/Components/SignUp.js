import React, { useEffect, useRef, useState } from "react";
import axios from "axios";




export const Signup = () => {
  const [buttonPress, setButtonPress] = useState(false);
  const [data, setData] = useState("");
  const firstNameInput = useRef('');
  const lastNameInput = useRef('');
  const userNameInput = useRef('')
  const emailInput = useRef('')
  const passwordInput = useRef('')
  

  const fetching = () => {
    axios.get('http://localhost:3500/signup').then(res=>console.log(res));
    // const data = await result.json();
    //  console.log('dataaaa',result);
    // return data;
  };

  useEffect(()=>{
    if (buttonPress) {
      fetching();
      setButtonPress(false);
    }
  }, [buttonPress]);


  

  const handleSubmit=(e)=>{
    // e.preventDefault();
   const firstname = firstNameInput.current.value;
   const lastname = lastNameInput.current.value;
   const username = userNameInput.current.value;
   const email = emailInput.current.value;
   const password = passwordInput.current.value;
   setButtonPress(true);
   
  //  {method: 'POST', headers: {
  //   'Content-Type': 'application/json',
  //  },
  //  body: JSON.stringify({ firstname }),
  // })
  // const body = await response.text();
  // console.log('body', body);
}



  return (
    <div className="signupContainer">
  
      <div className="miniSignupContainer">
        <form>
        <h3 className="signUpheader">Sign Up</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              aria-describedby="emailHelp"
              placeholder="Enter Your First Name"
              ref={firstNameInput}
            />
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              aria-describedby="emailHelp"
              placeholder="Enter Your Last Name"
              ref={lastNameInput}
            />
            <input
              type="text"
              className="form-control"
              id="exampleInputUserName"
              aria-describedby="emailHelp"
              placeholder="Enter Your User Name"
              ref={userNameInput}
            />
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              ref={emailInput}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              ref={passwordInput}
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
          <button onClick={handleSubmit} type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
