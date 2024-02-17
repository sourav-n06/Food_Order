import { FOOD_IMG_URL } from "../utils/constants";

const ResMenu3 = (props) => {
    const {itemData} = props;
    const {
        name,imageId, defaultPrice,
        price,category,
    } = itemData?.card?.info;
    return (
        <div className="cartMemu"> 
            <div className="cartMenuLeft">
                <h4 className="cart_details">{name}</h4>
                <h5 className="cart_details">₹ {price/100 || defaultPrice/100}</h5>
                <h5 className="cart_details grayTxt">{category}</h5>
                <div className="add"> Add </div>
            </div>
            <div className="cartMenuRight">
                <img className="CartMemu-img" src = {FOOD_IMG_URL + imageId} />
            </div>
        </div>
    )
}
export default ResMenu3;