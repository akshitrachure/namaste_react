import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div>
            <button className="p-2 rounded-md bg-red-100" onClick={()=>handleClearCart()}>Clear Cart</button>

            <div className="flex">
                {cartItems.map(item=><FoodItem {...item} key={item.id}/>)} 
            </div>
        </div>

        
        
    )
}

export default Cart;