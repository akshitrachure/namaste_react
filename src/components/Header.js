import { useState } from "react"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Title = () => {
    return(
        <>
            <a href="/">
            <img className="w-24" alt="Logo Image" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"></img>
            </a>
            {/* <input type="text"></input> */}
        </>
        
    )
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState();

    const isOnline = useOnline();

    // console.log(useState("Hi"));

    return(
        <div className="flex justify-between bg-orange-200 shadow-lg">
            <Title/>

            <div className="">
                <ul className="flex py-8 sm:hidden">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2"><Link to="/">Cart</Link></li>
                </ul>
            </div>

            <h1 className="py-8">{isOnline ? "✅" : "🔴"}</h1>
            
            {isLoggedIn ? (<button className="px-2 bg-orange-300 hover:bg-orange-400 shadow-md" onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (<button className="px-2 bg-orange-300 hover:bg-orange-400 shadow-md" onClick={()=>setIsLoggedIn(true)}>Login</button>)}
            
            
        </div>
    )
}

export default Header;