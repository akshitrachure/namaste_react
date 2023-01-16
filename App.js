import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => {
    return(
        <>
            <a href="/">
            <img className="image-logo" alt="Logo Image" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"></img>
            </a>
            {/* <input type="text"></input> */}
        </>
        
    )
}


const Heads = () => {
    return(
        <div className="title">
        <Title/>
        <Title></Title>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    )
}


const Header = () => {
    return(
        <div className="header">
            <Title/>

            <div className="nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

root.render(<Header/>);