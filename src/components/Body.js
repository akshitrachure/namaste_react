import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";



function filterFunction(inputText, restaurants){
    const result = restaurants.filter((restaurant)=>(
        
            restaurant?.data?.name?.includes(inputText)
        
    ))
    return result;
}


const Body = () =>{

    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return(
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
                <button className="search-btn" onClick={()=>{
                    const filteredData = filterFunction(searchText, restaurantList);
                    setRestaurants(filteredData);
                    console.log(filteredData);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant)=>{
                    return(
                        <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id}/>
                    )
                })}
            </div>
        </>
        
    )   
    
}

export default Body;