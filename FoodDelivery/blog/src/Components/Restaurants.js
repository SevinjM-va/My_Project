import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


export const Restaurants = (props) => {
  return (
    <div className="restContainer">
      <div className="restHeader">
        <h2 className="restTitle">Restaurants</h2>
        <h3> All Restaurants</h3>
      </div>
      <div className="restMiniContainer">
        {props.info
          ? props.info.initialSt.restaurants.map((data) => {
              // console.log(data.img);
              return (
                <Link to={`/restaurants/${data.id}?name=${data.name}`}>
                  <div
                    key={data.id}
                    className="restCardContainer"
>
                    <img className="restImg" src={data.img} alt={data.alt} />
                    <h4>{data.name}</h4>
                  </div>
                </Link>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>({
  info: state
})

export default connect(mapStateToProps)(Restaurants)