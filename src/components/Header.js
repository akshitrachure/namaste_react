import { useState } from "react"

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
            {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
            
            
        </div>
    )
}

export default Header;