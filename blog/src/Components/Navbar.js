import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SeeFoo from "../images/Seefoo.png";

import { connect } from "react-redux";

const Navbar = (props) => {
  const [rest, setRest] = useState("");
  const [profilData, setProfilData] = useState(false);
  const location = useLocation();
  const propsRest = props.info.initialSt.restaurants;
  const token = localStorage.getItem("token");

  const navbarPath = ["/", "/explore", "/restaurants", "/stores", "/checkout"];
  if (!navbarPath.includes(location.pathname)) {
    return null;
  }

  const handleChange = (e) => {
    e.preventDefault();
    const searchInputvalue = e.target.value;
    const searchInput =
      searchInputvalue.charAt(0).toUpperCase() +
      searchInputvalue.slice(1).toLowerCase();
    const findRest = propsRest.filter((item) =>
      item.name.includes(searchInput)
    );
    console.log('rest', findRest)
    searchInput.length > 0 ? setRest(findRest) : setRest("");

  };
  
  return (
    <div className="navbarContainer">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="logoImg" src={SeeFoo} alt=""></img>
          </Link>
          <Link to="/restaurants" className="navbar-brand">
          <p className="navRest">
          <i class="fa-solid fa-utensils"></i>
          Restaurants</p>
          </Link>
          <Link to="/explore" className="navbar-brand">
          <p className="navExp">
          <i class="fa-solid fa-globe"></i>Explore</p>
          </Link>
         
          

          <div className="searchInputDiv"> 
            <input
              className="search"
              name="search"
              type="text"
              placeholder="Search your restaurant.."
              onChange={handleChange}
            ></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {token == null ? 
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
          </form>: 
          <div className="profilDiv">
          <i class="fa-regular fa-user"></i> 
          <h7>Profil</h7>
          </div>}
        </div>
      </nav>
      <div className="searchContainerCon">
      
        <div className="searchContainer">
            {rest
              ? rest.map((item) => {
                  return (
                    <Link to={`/restaurants/${item.id}?name=${item.name}`}>
                    <div key={item.id} className="searchoption">
                      <img
                        className="orderSmallImg"
                        src="https://source.unsplash.com/HTpiHBRoBIc"
                        alt="Spaghetti and Meatballs with Basil Garnish"
                      ></img>
                      <div className="orderDetail">
                        <div className="detail">
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </div>
                    </Link>
                  );
                })
              : ""}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  info: state,
});

export default connect(mapStateToProps)(Navbar);
