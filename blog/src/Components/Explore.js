import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { connect } from "react-redux";

const Explore = (props) => {
  const propsInfo = props.info.initialSt.category;
  return (
    <div className="restContainer">
      <div className="restHeader">
        <h2 className="restTitle">Explore</h2>
        <h3> All Categories</h3>
      </div>
      <div className="restMiniContainer">
        {propsInfo
          ? propsInfo.map((data) => {
              return (
                <Link to={`/restaurants/${data.restaurant_id}`}>
                  <div
                    key={data.id}
                    className="restCardContainer">
                    <img className="restImg" src={data.img} alt="" />
                    <h4>{data.name}</h4>
                  </div>
                </Link>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  info: state,
});

export default connect(mapStateToProps)(Explore);
