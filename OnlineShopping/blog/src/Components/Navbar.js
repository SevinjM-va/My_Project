import React from "react";
import { Link } from 'react-router-dom';
import SeeFoo from '../images/Seefoo.png';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img className="logoImg" src={SeeFoo} alt=""></img>
          <a className="navbar-brand">ShopShip</a>
          <form className="d-flex">

            <button className="btn btn-success" type="submit">
              Login
            </button>
            <button className="btn btn-success" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
