import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";



export const Details = (props) => {
  console.log("props", props.info);
  const [categ, setCateg] = useState("");
  const [food, setFood] = useState("");

  const location = useParams();
  const id = location.rest_id;
  console.log(id);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(`http://localhost:3500/restaurants/${id}`);
        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("1-ci", data.categories);
        console.log("2-ci", data.menuItems);
        setCateg(data.categories);
        setFood(data.menuItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetching();
  }, []);

  const handlysubmit = () => {};

  return (
    <div className="foodContainer">
      <div className="restaurantImgDiv">
        {props.info? props.info.map((item)=>{
          if(item.id === id){
            console.log(item.id)
            return <h1>{item.name}</h1>
          }
        }): 'Loading..'}
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
        <ul className="reastaurantMenu" onClick={handlysubmit}>
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
                              className="menuFoodCard">
                                <div className="foodDetails">
                              <p>{filteredItem.name}</p>
                              <p>{filteredItem.price} AZN</p>
                              <form>
                                <label>Quantity:</label>
                                <input defaultValue={1} type="number" className="quantityInput"/>
                                <Link to='/checkout'>
                                <button className="quantitebtn">Add to Card</button>
                                </Link>
                              </form>
                              </div>
                              <img className="foodSmallImg" src="https://source.unsplash.com/HTpiHBRoBIc" alt="Spaghetti and Meatballs with Basil Garnish"></img>
                              
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
