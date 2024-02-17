import { Delivery_Cycle_URL, Delivery_Timeline_URL, Rupees_URL } from "../utils/constants";

const ResMenu1 = (props) => {
    const { menuData } = props
    const {
        avgRating,
        avgRatingString,
        name,
        costForTwoMessage,
        cuisines,sla,totalRatingsString,
        feeDetails,areaName
    } = menuData;

    let bgColor;
    if (avgRating < 4) {
        bgColor = "#eabd43";
    } else {
        bgColor = "#1bc52c";
    }

    return (
        <div className="outermenuTop">
            <div className="menuTop">
                <div className="menuTop-left">
                    <h3>{name}</h3>
                    <h5 className="menuCuisine grayTxt">{cuisines.join(', ')}</h5>

                    <h5 className="menuArea grayTxt">{areaName} - {sla.lastMileTravelString}</h5>

                    <img className = "deli-img " src = {Delivery_Cycle_URL} /> <span className="grayTxt"> {feeDetails.message} </span>
                </div>
                <div className="menuTop-right">
                    <p className = "rating" style={{backgroundColor : bgColor, width : 25}}>{avgRatingString}</p>
                    <p className="grayTxt txtSiz">{totalRatingsString}</p>
                </div>
            </div>
            <div className="menuTopNested">
                <div className="delivaryTime">
                    <img className="delivaryTime-logo" src = {Delivery_Timeline_URL}/>
                    <h4>{sla.slaString}</h4>
                </div>
                <div className="costTwo">
                    <img className="costTwo-logo" src = {Rupees_URL}/>
                    <h4>{costForTwoMessage}</h4>
                </div>  
            </div>
        </div>
 

    )
}

export default ResMenu1;