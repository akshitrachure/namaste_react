import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) =>{
    return(
        <div className="p-3 m-3 w-52 border border-solid to-black">
            <img className="" alt="cardImage" src={IMG_CDN_URL + cloudinaryImageId}></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3 className="text-lg">{cuisines?.join(", ")}</h3>
            <h4 className="text-md">{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;