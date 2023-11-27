import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SeeFoo from "../images/Seefoo.png";


export const Navbar = () => {

  const location = useLocation();

  const navbarPath = ['/','/explore','/restaurants','/stores','/checkout']
  if(!navbarPath.includes(location.pathname)){
    return null
  }



  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="logoImg" src={SeeFoo} alt=""></img>
          </Link>

          <form className="d-flex">
            <Link to="/login">
              <button className="btn btn-success" type="submit">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-success" type="submit">
                Sign up
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};
