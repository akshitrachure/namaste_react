import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    //const [restaurant, setRestaurant] = useState(null);


    const restaurant = useRestaurantInfo(resId);

    const dispatch = useDispatch();

    function addFoodItem(item){
        dispatch(addItem(item));
    }

    function removeItems(id){
        dispatch(removeItem(id));
    }

    return !restaurant ? (<Shimmer/>) : (
        <div className="flex flex-wrap m-4">

        <div className="p-3">
            {/* <h1>Restaurant ID:{restaurant.id}</h1> */}
            <h1 className="font-bold text-3xl py-3 text-center">{restaurant?.name}</h1>
            <img className="w-96 py-2" src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
            <h3 className="px-4 font-semibold text-lg">Area: {restaurant?.area}</h3>
            <h3 className="px-4 font-semibold text-lg">City: {restaurant?.city}</h3>
            <h3 className="px-4 font-semibold text-lg">Rating: {restaurant?.avgRating} stars</h3>
            <h3 className="px-4 font-semibold text-lg">{restaurant?.costForTwoMsg}</h3>
        </div>
        <div className="px-10 py-3">
            <h1 className="font-bold text-3xl py-3" data-testid="menu">Menu</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item)=>(<li className="py-1" key={item.id}>{item.name} - <button data-testid="add-btn" onClick={()=>addFoodItem(item)} className="rounded-md p-1 bg-green-200">Add</button> - <button className="p-1 rounded-md bg-red-200" onClick={()=>removeItems(item.id)}>Remove</button></li>))}
            </ul>
        </div>
        
        </div>
    )

}

export default RestaurantMenu;