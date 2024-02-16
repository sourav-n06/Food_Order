import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [LogStts, setLogStts] = useState("Log in");
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = {LOGO_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                   <li> 
                        <Link to = "/home"> 
                            Home 
                        </Link>
                    </li>

                    <li>
                        <Link to = "/cart"> 
                            Cart
                        </Link> 
                    </li> 
                            
                     <li>
                        <Link to = "/about">
                            About Us
                        </Link> 
                    </li> 
                    <li className = "contact"> 
                        <Link to = "/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="login">
                    <h4 className="log loginc" onClick = {()=> {
                        if(LogStts == "Log in") setLogStts("Log Out")
                        else setLogStts("Log in")
                    }}>{LogStts}</h4>
            </div>
        </div>
        )
}

export default Header;