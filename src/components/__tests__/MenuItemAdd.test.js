import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store";
import RestaurantMenu from "../RestaurantMenu";
import {MENU_DATA} from "../../utils/MockRestaurantMenuData";
import Header from "../Header";
import Cart from "../Cart";


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MENU_DATA)
    })
)




test("Check if items get add in cart when Add button is clicked in restaurant menu page", async() => {
    const restaurantMenu = render(
        <StaticRouter>
            <Provider store={store}> 
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(restaurantMenu.getByTestId("menu")))

    const addBtn = restaurantMenu.getAllByTestId("add-btn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
    fireEvent.click(addBtn[4]);

    const cart = restaurantMenu.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart - 3 items")

    
    const foodItemCount = restaurantMenu.getByTestId("fooditems");

    expect(foodItemCount.children.length).toBe(3);


})