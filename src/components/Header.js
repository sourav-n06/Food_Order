import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [LogStts, setLogStts] = useState("Log in");
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = {LOGO_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li className = "contact">Contact Us</li>
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