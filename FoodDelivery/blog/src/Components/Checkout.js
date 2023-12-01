import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Checkout = (props) => {
  const propsInfo = props.info.orders;
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  console.log('checkout',propsInfo)

  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await axios.get("http://localhost:3500/checkout", {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        // if(data){
        //   setLogin()
        // }
       
      } catch (error) {
        setMessage("You must log in!!");
      }
    };
    fetching();
  }, []);

  useEffect(()=>{
    props.dispatch({type: 'CALCULATE_TOTAL'})
  },[propsInfo.cartItems]);

  const handleClick=async(e)=>{
    e.preventDefault();
    try {
    const { data } = await axios.post('http://localhost:3500/checkout',{
     orders: propsInfo.cartItems,
    })
    if(data.success){;
      setMessage('Order successful')
      props.dispatch({type: 'CLEAR_STATE'})
    }
  } catch (error){setMessage(error)}
  }



  return (
    <div className="checkoutContainer">
      {message ? (
        <div className="errorContainer">
          <h2>{message}</h2>
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
                      <div className="priceDiv">
                      <div>
                        <label>Quantity:</label>
                        <label>{item.itemAmount}</label>
                    </div>
                    <label className="totalPrice">{item.itemAmount * item.price} AZN</label>
                    </div>
                </div>
                </div>
                  )}):''}
             
            </div>
          </div>
          <div className="checkoutorder">
            <h3>Prices in AZN</h3>
            <div className="itemSubtotal">
              <p>Item subtotal ({propsInfo.amount} item)</p>
              <p>{}</p>
            </div>
            <div className="deliveryFee">
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="totalSum">
              <h4>Total Sum</h4>
              <h4>AZN {propsInfo.totPrice}</h4>
            </div>
            <button className="submitBtn" onClick={handleClick}>Submit</button>
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

