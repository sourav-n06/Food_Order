import {FOOTER_URL} from "../utils/constants";

const Footer = () => {

    return(
    <div className="footer">
        <div className="footer-up">
            <div className= "footer-img">
                <img className = "footer-logo" src = {FOOTER_URL} />
            </div>
            <div className = "footer-nv">
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
        </div>
        <div className="creator">  
        <p>Copy Right © 2024 All Right Reserved</p>
        <p>Designed By Sourav ❤️</p>
        </div>
    </div>
    )
}

export default Footer;