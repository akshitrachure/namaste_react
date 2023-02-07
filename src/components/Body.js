//import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { FETCH_RESTAURANT_DETAILS_URL } from "../config";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";



const Body = () =>{

    //console.log(useState());
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    
    const {userDetails, setUserData} = useContext(userContext);
    
    const restaurantsDetails = useRestaurantDetails();
    useEffect(()=>{
        setAllRestaurants(restaurantsDetails);
        setFilteredRestaurants(restaurantsDetails);
    },[restaurantsDetails]);


    const isOnline = useOnline();

    if(!isOnline)
        return <h1>🔴 Offline, please check your internet connection!!</h1>;




    
    if(!allRestaurants)
        return null;

    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
        <>
            <div className="my-5 p-5">
                <input type="text" className="focus:bg-green-200 p-2 m-2" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
                <button className="w-20 h-8 px-2 m-4 bg-purple-600 hover:bg-gray-500 text-white rounded-md" onClick={()=>{
                    const filteredData = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(filteredData);
                }}>Search</button>

                <input placeholder="userData" className="focus:bg-green-200 p-2 m-2" value={userDetails.name} onChange={(e)=>setUserData({
                    ...userDetails,
                    name:e.target.value,                    
                    })}></input>
           
            </div>

           
                

            <div className="flex flex-wrap sm:text-center justify-center">
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