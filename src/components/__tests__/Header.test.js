// import test from "node:test";
import { render } from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
            <Header/>
            </Provider>
        </StaticRouter>
    );

    const logo = header.getByTestId("logo");
    
    expect(logo.src).toBe("https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj");

});



test("Check if the online status is Green by default when rendered", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
            <Header/>
            </Provider>
        </StaticRouter>
    );

    const checkOnline = header.getByTestId("onlineStatus");

    expect(checkOnline.innerHTML).toBe("✅");

});


test("Check if the initial count of items in cart is 0", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 0 items");

})