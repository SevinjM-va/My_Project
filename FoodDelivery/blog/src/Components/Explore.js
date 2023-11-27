import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



const Explore = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState("");


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };


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
      <div className="carousel-container">
      <button onClick={prevSlide}>&lt; Prev</button>

      <div className="carousel-content">{slides[currentSlide]}</div>
      <button onClick={nextSlide}>Next &gt;</button>
    </div>
    </div>
  );
};




const mapStateToProps=(state)=>({
  info: state
})

export default connect(mapStateToProps)(Explore)