import { useState } from "react"
import { Link } from "react-router-dom";
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

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState();
    // console.log(useState("Hi"));

    return(
        <div className="header">
            <Title/>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                </ul>
            </div>
            {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
            
            
        </div>
    )
}

export default Header;