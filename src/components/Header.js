import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                    <h4 className="log">Sign up</h4>
                    <h4 className="log loginc">Log in</h4>
            </div>
        </div>
        )
}

export default Header;