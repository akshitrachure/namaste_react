//import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { FETCH_RESTAURANT_DETAILS_URL } from "../config";
import useOnline from "../utils/useOnline";

const Body = () =>{

    //console.log(useState());
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    
    const restaurantsDetails = useRestaurantDetails();
    useEffect(()=>{
        setAllRestaurants(restaurantsDetails);
        setFilteredRestaurants(restaurantsDetails);
    },[restaurantsDetails]);


    console.log("BODYYYYYYYYYYYYYYYY");
    // console.log(restaurantsDetails);
    // setAllRestaurants(restaurantsDetails);
    // setFilteredRestaurants(restaurantsDetails);
    // console.log(prints)

    const isOnline = useOnline();

    if(!isOnline)
        return <h1>🔴 Offline, please check your internet connection!!</h1>;




    
    if(!allRestaurants)
        return null;

    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
                <button className="search-btn" onClick={()=>{
                    const filteredData = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(filteredData);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                 {filteredRestaurants.length === 0 ? (<h1>No restaurants match your search</h1>) : (filteredRestaurants.map((restaurant)=>{
                    return (
                        <Link to={"/restaurant/"+restaurant?.data?.id} key={restaurant?.data?.id}>
                            <RestaurantCard {...restaurant?.data} />
                        </Link>
                        
                    )
                }))}
                
            </div>
        </>
        
    )   
    
}

export default Body;