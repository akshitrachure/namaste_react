import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./config";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";



// const heading1 = React.createElement("h1",{id:"h1", key:"h1"},"Heading1");

// const heading2 = React.createElement("h2",{id:"h2", key:"h2"},"Heading2");

// const div1 = React.createElement("div",{id:"div1", key:"div1"},[heading1, heading2]);

// const container = React.createElement("div",{id:"container", key:"container"},div1);




// const head = (
//     <div className="title">
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
// )



// const Heads = () => {
//     return(
//         <div className="title">
//         <Title/>
//         <Title></Title>
//             <h1>Heading 1</h1>
//             <h2>Heading 2</h2>
//             <h3>Heading 3</h3>
//         </div>
//     )
// }



const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:'/about',
        element:<About/>,
        errorElement:<Error/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:'/contact',
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenu/>,
        errorElement:<Error/>
      }
    ]
  },
  
  
]);

root.render(<RouterProvider router={appRouter}/>);