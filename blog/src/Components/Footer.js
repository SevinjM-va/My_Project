import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SeeFoo from "../images/Seefoo.png";
import img1 from "../images/instagram.svg";
import img2 from "../images/linkedin.svg";
import img3 from "../images/youtube.svg";
import img4 from "../images/facebook.svg";

export const Footer = () => {

  const location = useLocation();

  const footerPath = ['/','/checkout','/restaurants','/explore',]
  if(!footerPath.includes(location.pathname)){
    return null
  }
  return (
    <div>
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
                src={img4}
                alt=""
              ></img>
              <img className="icon-footer" src={img1} alt=""></img>
              <img className="icon-footer" src={img2} alt=""></img>
              <img className="icon-footer" src={img3} alt=""></img>
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
