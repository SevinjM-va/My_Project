import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';



export const Checkout = ({authorized}) => {


  return(
    <div className='checkoutContainer'>
      <div className='checkoutDiv'>
        <div className='checkoutDetails' >
          <h3>Selected Item</h3>
          </div>
        <div className='checkoutorder'>
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
    </div>
  )
}
