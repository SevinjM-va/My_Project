import React, { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import "./App.css";
import { Home } from "./Components/Home";
import { Route, BrowserRouter as Router, Link, Routes,  } from "react-router-dom";
import { Signup } from "./Components/SignUp";
import { LoginPage } from "./Components/Login";
import Explore from "./Components/Explore";
import Restaurants from "./Components/Restaurants";
import { Stores } from "./Components/Stores";
import Details from "./Components/Details";
import { Footer } from "./Components/Footer";
import { connect } from "react-redux";
import { Checkout } from "./Components/Checkout";


function App(props) {
  const [token, setToken] = useState('');



  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch("http://localhost:3500/restaurants");
        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        props.dispatch({ type: "FETCHING_RESTAURANTS", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetching();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/restaurants/" element={<Restaurants />} />
        <Route path="/restaurants/:rest_id" element={<Details/>} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  info: state,
});

export default connect(mapStateToProps)(App);
