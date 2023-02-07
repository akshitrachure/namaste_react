import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Title = () => {
    return(
        <>
            <a href="/">
            <img className="w-24" alt="Logo Image" src={Logo}></img>
            </a>
            {/* <input type="text"></input> */}
        </>
        
    )
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState();

    const isOnline = useOnline();

    const {userDetails} = useContext(userContext);

    return(
        <div className="flex justify-between bg-orange-200 shadow-lg">
            <Title/>

            <div className="">
                <ul className="flex py-8">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2"><Link to="/">Cart</Link></li>
                </ul>
            </div>

            <h1 className="py-8">{isOnline ? "✅" : "🔴"}</h1>
            
            <p>{userDetails.name} - {userDetails.email}</p>

            {isLoggedIn ? (<button className="px-2 bg-orange-300 hover:bg-orange-400 shadow-md" onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (<button className="px-2 bg-orange-300 hover:bg-orange-400 shadow-md" onClick={()=>setIsLoggedIn(true)}>Login</button>)}
            
            
        </div>
    )
}

export default Header;