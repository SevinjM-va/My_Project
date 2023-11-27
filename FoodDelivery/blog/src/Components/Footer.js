import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SeeFoo from "../images/Seefoo.png";


export const Footer = () => {

  const location = useLocation();

  const footerPath = ['/','/checkout','/restaurants','/stores',]
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
