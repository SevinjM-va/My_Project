import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { formToJSON } from "axios";
import cardIcon from "../images/cardIcon.png";

export const Details = (props) => {
  const [categ, setCateg] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const formRef = useRef(null);

  let card = 0;
  const itemAmount = props.info.orders.cartItems.map((item)=>{
    card += item.itemAmount
  });

  const location = useParams();
  const id = location.rest_id;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const getSubmit = (data, quant, event) => {
    event.preventDefault();
    props.dispatch({
      type: "ADD_TO_CART",
    payload: { ...data, itemAmount: quant},
    });
    setQuantity(1)
  };


  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(`http://localhost:3500/restaurants/${id}`);
        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCateg(data.categories);
        setFood(data.menuItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetching();
  }, []);

  return (
    <div className="foodContainer">
      <div className="restaurantImgDiv">
        {props.info
          ? props.info.initialSt.restaurants.map((item) => {
              if (item.id == id) {
                return <h1 className="selectedRestName">{item.name}</h1>;
              }
            })
          : "Loading.."}
        <div className="cardImgContainer">
          <Link to='/checkout'>
            <div className="numberOfOrder">{card}</div>
            <img className="cardImg" src={cardIcon} alt="" />
          </Link>
        </div>
      </div>
      <div className="restaurantInfoDiv">
        <p>
          The restaurant isn't delivering to your location, but you can still
          place an order for pickup.
        </p>
        <p>
          <i className="fa-regular fa-clock"></i>
          Open until 12:00 AM
        </p>
      </div>
      <hr></hr>
      <div className="reastaurantMenuDiv">
        <h2>MENU </h2>
        <ul className="reastaurantMenu">
          {categ
            ? categ.map((data) => {
                return <li key={data.id}>{data.name}</li>;
              })
            : "Loading..."}
        </ul>
        <div className="advertising">
          <div className="advertising1">
            New customers enjoy 14 days of free delivery!
          </div>
          <div className="advertising2">
            First order with 20% discount! (max. 10 AZN)
          </div>
        </div>

        <div className="menuFoodContainer">
          {categ
            ? categ.map((data) => {
                return (
                  <div key={data.id} className="menuFoodBox">
                    <h2>{data.name}</h2>
                    <div className="menuFood">
                      {food
                        ? food
                            .filter((item) => item.category_id === data.id)
                            .map((filteredItem) => (
                              <div
                                key={filteredItem.id}
                                className="menuFoodCard"
                              >
                                <form ref={formRef} className="foodDetails">
                                  <p id="itemName">{filteredItem.name}</p>
                                  <p className="price" id="itemPrice">
                                    {filteredItem.price} AZN
                                  </p>
                                  <label htmlFor="quantity">Quantity:</label>
                                  <input
                                    id="quantity"
                                    defaultValue={quantity}
                                    type="number"
                                    className="quantityInput"
                                    name="quantity"
                                    onChange={handleQuantityChange}
                                    min="1"
                                    step="1"
                                  />
                                  <button
                                    className="quantitebtn"
                                    onClick={(event) =>
                                      getSubmit(filteredItem, quantity, event)
                                    }
                                  >
                                    Add to Card
                                  </button>
                                </form>
                                <img
                                  className="foodSmallImg"
                                  src="https://source.unsplash.com/HTpiHBRoBIc"
                                  alt="Spaghetti and Meatballs with Basil Garnish"
                                ></img>
                              </div>
                            ))
                        : "Loading..."}
                    </div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  info: state,
});

export default connect(mapStateToProps)(Details);
