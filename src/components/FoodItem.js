import { IMG_CDN_URL } from "../config";


const FoodItem=({name, cloudinaryImageId, price})=>{
    return(
        <div className="p-3 m-3 w-52 border border-solid to-black">
            <img alt="foodItemImage" src={IMG_CDN_URL + cloudinaryImageId}></img>
            <h1 className="font-bold text-xl">{name}</h1>
            <h2 className="text-lg">{price/100}/-</h2>
            
        </div>
    )
}

export default FoodItem;