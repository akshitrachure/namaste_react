import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


function filterFunction(inputText, restaurants){
    const result = restaurants.filter((restaurant)=>(
        
            restaurant?.data?.name?.toLowerCase()?.includes(inputText?.toLowerCase())
        
    ))
    return result;
}


const Body = () =>{

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurantDetails();
    },[]);


    async function getRestaurantDetails(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =  await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    


    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
                <button className="search-btn" onClick={()=>{
                    const filteredData = filterFunction(searchText, allRestaurants);
                    setFilteredRestaurants(filteredData);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                 {filteredRestaurants.length === 0 ? (<h1>No restaurants match your search</h1>) : (filteredRestaurants.map((restaurant)=>{
                    return (
                        <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id}/>
                    )
                }))}
                
            </div>
        </>
        
    )   
    
}

export default Body;