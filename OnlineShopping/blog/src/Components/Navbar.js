import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img src='https://www.canva.com/design/DAF0r5-Dcz4/SEq4bNgh05R9zX4w3Dvq-w/view?utm_content=DAF0r5-Dcz4&utm_campaign=designshare&utm_medium=link&utm_source=editor' alt=""></img>
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
