import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_DETAILS_URL } from "../config";

const useRestaurantDetails=()=>{
    
    const [restaurant, setRestaurant] = useState([]);

    useEffect(()=>{
        getRestaurantDetails();
    },[]);


    async function getRestaurantDetails(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =  await data.json();
        setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    //     console.log("HEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    //     //console.log(json?.data?.cards[2]?.data?.data?.cards);
    //    console.log(restaurant);
        //setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return restaurant;
}


export default useRestaurantDetails;