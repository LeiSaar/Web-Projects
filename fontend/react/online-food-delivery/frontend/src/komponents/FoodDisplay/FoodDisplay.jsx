import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import React, { useContext } from 'react'


export const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className="food-display" id = 'food-diaplay'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item, index) => {
                    if (category === "All" || category === item.category){
                        return <FoodItem  key = {index} id = {item._id} name = {item.name} description = {item.description} price = {item.price}
                     image = {item.image} />
                    }   
                })
            }
        </div>
    </div>
  )
}
