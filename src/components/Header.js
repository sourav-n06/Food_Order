import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux"


const Header = () => {
    const [LogStts, setLogStts] = useState("Log in");
    const onlineStts = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className = "header">
            <div className = "logo-container">
            <Link to = "/" >  <img className = "logo" src = {LOGO_URL}/> </Link>
            </div>
            <div className = "nav-items">
                <ul>
                   <li> 
                        <NavLink to = "/home" style={{ textDecoration: 'none', color: 'inherit' }}> 
                            Home 
                        </NavLink>
                    </li>

                    <li>
                        <NavLink  to = "/cart" style={{ textDecoration: 'none', color: 'inherit' }}> 
                            Cart - { cartItems.length}
                        </NavLink> 
                    </li> 
                            
                     <li>
                        <NavLink to = "/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                            About Us
                        </NavLink> 
                    </li> 
                    <li className = "contact"> 
                        <NavLink to = "/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="login">
                    <h4>Online Status : {onlineStts ? "🟢" : "🔴"}</h4>

                    <h4 className="log loginc" onClick = {()=> {
                        if(LogStts == "Log in") setLogStts("Log Out")
                        else setLogStts("Log in")
                    }}>{LogStts}</h4>
            </div>
        </div>
        )
}

export default Header;