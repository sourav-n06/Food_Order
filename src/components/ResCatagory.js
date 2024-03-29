import ResMenu3 from "./ResMenu3";
import { useState } from "react";
import ResMenu4 from "./ResMenu4";
const ResCatagory = ({data, ShowItem, setShowItem}) => {
    const handleClick = () => {
        setShowItem();
    };
    return (
        <div className="catagory">
            <div className="catagoryAccordion" onClick={handleClick}>
                <span className="catagoryAccordionTxt">{data.title}({data?.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {ShowItem && <ResMenu4 itemData = {data?.itemCards}/>}
            <div className="catagoryAccordionShadow"></div>
        </div>
    )
}

export default ResCatagory;