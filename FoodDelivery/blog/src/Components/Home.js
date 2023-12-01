import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const Home = (props) => {
  // console.log("props from home", props);
  return (
    <div>
      <div className="heading">
        
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
    </div>
  );
};
