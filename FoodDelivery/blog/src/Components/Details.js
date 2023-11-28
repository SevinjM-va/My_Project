import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { formToJSON } from "axios";



export const Details = (props) => {
  const [categ, setCateg] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const formRef = useRef(null);

  const location = useParams();
  const id = location.rest_id;
  // console.log(id);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10); 
    setQuantity(newQuantity);
  };
  const getSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    console.log('formdata', formData);
    const itemName = formData.get('itemName');
    const itemPrice = formData.get('itemPrice');
    const quantity= formData.get('quantity')
    console.log('itemName', itemName);
    console.log('itemPrice', itemPrice);
    console.log('quantity', quantity);
    // props.dispatch({type: 'ORDERED_ITEM', payload: data})
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
        {props.info? props.info.initialSt.map((item)=>{
          if(item.id == id){
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
                className="menuFoodCard">
                  <form ref={formRef} className="foodDetails" onClick={getSubmit}>
                <p>{filteredItem.name}</p>
                <p className="price">{filteredItem.price} AZN</p>
                  <label htmlFor="quantity">Quantity:</label>
                  <input 
                    id="quantity"
                    defaultValue={1} 
                    type="number" 
                    className="quantityInput"
                    name = 'quantity'
                    value={quantity}
                    onChange={handleQuantityChange}
                    min='1'
                    step='1'
                    />
                  <Link to='/checkout'>
                  <button className="quantitebtn" >Add to Card</button>
                  </Link>
                </form>
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
