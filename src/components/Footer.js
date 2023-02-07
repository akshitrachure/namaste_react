import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () =>{

    const { userDetails } = useContext(userContext);

    return(
        <>
            <h1 className="font-bold text-3xl p-2">Footer</h1>
            <p>{userDetails.name} - {userDetails.email}</p>
        </>
        
    )
}

export default Footer;