import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const Checkout = () => {
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  // console.log("tokenn", token);

  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await axios.get("http://localhost:3500/checkout", {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        console.log("fetchin", data);
      } catch (error) {
        setError(error);
      }
    };
    fetching();
  }, []);

  return (
    <div className="checkoutContainer">
      {error ? (
        <div className="errorContainer">
          <h2>Error</h2>
          <p>Please log in!</p>
        </div>
      ) : (
        <div className="checkoutDiv">
          <div className="checkoutDetails">
            <h3 className="ordersTitle">Selected Item</h3>
            <div>
              <div className="orderCard">
              <img
                  className="orderSmallImg"
                  src="https://source.unsplash.com/HTpiHBRoBIc"
                  alt="Spaghetti and Meatballs with Basil Garnish"
                ></img>
                <div className="orderDetail">
                  <div className="detail">
                  <p>Spagetti</p>
                  <p className="price">2.20 AZN</p>
                  </div>
                    <label>Quantity:</label>
                    <input
                      defaultValue={1}
                      type="number"
                      className="quantityInput"
                    />
                </div>
                
              </div>
            </div>
          </div>
          <div className="checkoutorder">
            <h3>Prices in AZN</h3>
            <div className="itemSubtotal">
              <p>Item subtotal (1 item)</p>
              <p>1.50</p>
            </div>
            <div className="deliveryFee">
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="totalSum">
              <h4>Total Sum</h4>
              <p>AZN 5</p>
            </div>
            <button className="submitBtn">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};
