import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{

    const {resId} = useParams();
    const [restaurant, setRestaurant] = useState(null);


    useEffect(()=>{
        getRestaurantInfo();
    },[]);


    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + resId);
        const json =  await data.json();
        setRestaurant(json.data);

        console.log(json.data.menu);
    }

    return !restaurant ? (<Shimmer/>) : (
        <div className="menu">

        <div>
            {/* <h1>Restaurant ID:{restaurant.id}</h1> */}
            <h1>{restaurant?.name}</h1>
            <img  src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
            <h3>Area: {restaurant?.area}</h3>
            <h3>City: {restaurant?.city}</h3>
            <h3>Rating: {restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item)=>(<li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
        
        </div>
    )

}

export default RestaurantMenu;