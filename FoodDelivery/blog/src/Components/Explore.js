import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



const Explore = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState("");





  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(`http://localhost:3500/restaurants/2`);
        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.menuItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetching();
  }, []);

  console.log(slides)

  return (
    <div>
      
    </div>
  );
};




const mapStateToProps=(state)=>({
  info: state
})

export default connect(mapStateToProps)(Explore)