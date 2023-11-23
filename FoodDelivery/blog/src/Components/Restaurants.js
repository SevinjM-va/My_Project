import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



export const Restaurants = () => {
  const [rest, setRest] = useState('')


  useEffect(()=>{
    const fetching= async()=>{
        const response = await fetch("http://localhost:3500/restaurants")
        console.log(response)
    }
      
    fetching()
  },[])

  console.log(rest)

  
  return (
    <div className="restContainer">
      {/* {rest? rest.result.map((data)=>{
        console.log(data.name)
        return(
          <div key={data.id}  className="restCardContainer">
            <img src='../images/img6' alt=""></img>
            <h3>{data.name}</h3>
          </div> 
        )
        }): ('Loading...')} */}
      
    </div>
  )
}