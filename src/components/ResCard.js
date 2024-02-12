import { FOOD_IMG_URL } from "../utils/constants";


const ResCard =(props) => {
    const {resData} = props;

    const { name,
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
            <img
            className = "res-logo"
            alt = "logo of food"
            src ={ FOOD_IMG_URL + cloudinaryImageId} />
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