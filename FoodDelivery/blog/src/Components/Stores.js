import React, { useEffect } from "react";
import { Link } from 'react-router-dom';


export const Stores = () => {

  useEffect(()=>{
    const fetching= async()=>{
      try{
        const response = await fetch("http://localhost:3500/restaurants")
        if(!response.ok){
          throw new Error(`Http error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
      }
      catch(error){
        console.error("Error fetching data:", error);
      }
    } 
    fetching()
  },[])

  return (
    <div>
      
    </div>
  )
}