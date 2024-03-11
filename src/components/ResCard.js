import { FOOD_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom"

const ResCard =(props) => {
    const {resData} = props;

    const { name, id,
          cloudinaryImageId,
          areaName, 
          avgRating,
          cuisines, 
          sla,
        } =  resData?.info;
        let bgColor;
        if (avgRating < 4) {
            bgColor = "#eabd43";
        } else {
            bgColor = "#1bc52c";
        }
        
    return (
        <div className = "res-card">
            <Link to = {"/restaurants/" + id }><img
            className = "res-logo"
            alt = "logo of food"
            src ={ FOOD_IMG_URL + cloudinaryImageId} /> </Link>
            <div className = "rCon">
                <h3>{name}</h3>
                <div className="inside_rCon" >
                    <h5 className="rating" style = {{backgroundColor: bgColor}} >{avgRating} Star</h5>
                    <li>Delivery in {sla.deliveryTime} mins</li>
                </div>
                <div className="cuis">{cuisines.join(', ')}</div>
                <div className="area">{areaName}</div>
            </div>
        </div>
    )
}


export default ResCard;