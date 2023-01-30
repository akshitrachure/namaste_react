import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";


const useRestaurantInfo=(resId)=>{
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    
    
    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL + resId);
        const json =  await data.json();
        setRestaurant(json.data);
    
        // console.log(json.data.menu);
    }
    return restaurant;
}

export default useRestaurantInfo;


