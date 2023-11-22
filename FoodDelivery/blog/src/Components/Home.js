import React from "react";
import { Link } from "react-router-dom";
import SeeFoo from '../images/Seefoo.png';


export const Home = () => {
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand"><img className="logoImg" src={SeeFoo} alt=""></img></Link>
          <form className="d-flex">
            <button className="btn btn-success" type="submit">
              Login
            </button>
            <Link to='/'>
            <button className="btn btn-success" type="submit">
              Sign up
            </button>
            </Link>
          </form>
        </div>
      </nav>
    <div className="homebody">
      <div className="heading">
        <div className="title">
          <h1 >Select Your Favourite Food</h1>
          <h3 className="subtitle">Sign up and get 50% off your first order</h3>
          <Link to='/signup'>
            <button className="btn btn-success">Sign Up</button>
          </Link>
        </div>
    </div>
    </div>
    </div>
  )
}