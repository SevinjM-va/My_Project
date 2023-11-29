import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Checkout = (props) => {
  const propsInfo = props.info.orders;
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  console.log('checkout',propsInfo.amount)

  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await axios.get("http://localhost:3500/checkout", {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
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
                  {propsInfo? propsInfo.cartItems.map((item)=>{

                    return(
                      <div className="orderCard">
                        <img
                          className="orderSmallImg"
                          src="https://source.unsplash.com/HTpiHBRoBIc"
                          alt="Spaghetti and Meatballs with Basil Garnish"
                        ></img>
                    <div className="orderDetail">
                      <div className="detail">
                      <p>{item.name}</p>
                      </div>
                    <label>Quantity:</label>
                    <label>{item.itemAmount}</label>
                </div>
                </div>
                  )}):''}
             
            </div>
          </div>
          <div className="checkoutorder">
            <h3>Prices in AZN</h3>
            <div className="itemSubtotal">
              <p>Item subtotal ({} item)</p>
              <p>{}</p>
            </div>
            <div className="deliveryFee">
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="totalSum">
              <h4>Total Sum</h4>
              <p>AZN {}</p>
            </div>
            <button className="submitBtn">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  info: state,
});

export default connect(mapStateToProps)(Checkout);

