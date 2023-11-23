import React from "react";
import { Link } from "react-router-dom";
import SeeFoo from "../images/Seefoo.png";

export const Home = () => {
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

      <div className="heading">
      <ul>
            <Link to='/explore'><li>Explore</li></Link>
            <Link to='/restaurants'><li>Restaurants</li></Link>
            <Link to='/stores'><li>Stores</li></Link>
          </ul>
        <div className="title">
          <h1>Select Your Favourite Food</h1>
          <h3 className="subtitle">Sign up and get 50% off your first order</h3>
          <Link to="/signup">
            <button id="firstbtn" className="btn btn-success">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="secondContainer">
        <h2 className="aboutTitle">
          What is <strong>SeeFoo</strong>?
        </h2>
        <div className="about">
          <div className="aboutText">
            <h2 className="aboutTitle2">What is our mission?</h2>
            <p>
              <strong>SeeFoo</strong> makes it incredibly easy for you to
              discover and get what you want. Delivered to you – quickly,
              reliably and affordably.
            </p>
          </div>
          <div className="aboutImg"></div>
        </div>
      </div>
      <div className="thirdContainer">
        <h2 className="additionalInfoTitle">Did you now?</h2>
        <p className="additionalInfoP">
          Getting home-delivered kebab is more than your life made easy. When
          you order with SeeFoo, you help thousands of hard-working restaurant
          and store owners and couriers make a living.
        </p>
        <div className="about2">
          <div className="aboutImg2">
            <h2 className="add">Explorer our Restaurants</h2>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer1">
          <div className="footer11">
            <h3>SeeFoo</h3>
            <p>Our mission to serve you and make fastest shipping!</p>
          </div>

          <div>
            <h3>Social</h3>
            <div className="icon-container-footer">
              <img
                className="icon-footer"
                src="http://www.w3.org/2000/svg"
                alt=""
              ></img>
              <img className="icon-footer" src="Img/twitter.svg" alt=""></img>
              <img className="icon-footer" src="Img/youtube.svg" alt=""></img>
              <img className="icon-footer" src="Img/github.svg" alt=""></img>
            </div>
          </div>
        </div>

        <hr />
        <div className="footer2">
          <div>
            <i className="fa-regular fa-copyright" />
          </div>
          <div>
            <p>SeeFoo 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
