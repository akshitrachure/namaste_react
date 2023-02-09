// import test from "node:test";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import {render, waitFor, fireEvent} from "@testing-library/react";
import store from "../../utils/store";
import Body from  "../Body";
import {RESTAURANT_DATA} from "../../utils/MockRestaurantdata";


global.fetch = jest.fn(()=>
    Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_DATA),
    })
);



test("Shimmer should load on home page", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer")
    
    expect(shimmer.children.length).toBe(10);

})




test("Restaurants should load on Home page", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )


    await waitFor(() => expect(body.getByTestId("search-btn")))

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);

})




test("Search restaurants based on input should work on Home page", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )


    await waitFor(() => expect(body.getByTestId("search-btn")))

    const input = body.getByTestId("search-input");

    fireEvent.change(input, {
        target: {
            value: "food",
        },
    })


    const searchBtn = body.getByTestId("search-btn");

    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(5);

})