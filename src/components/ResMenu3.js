import { addItem } from "../utils/cartSlice";
import { FOOD_IMG_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';

const ResMenu3 = (props) => {
    const {itemData} = props;
    const {
        name,imageId, defaultPrice,
        price,category,
    } = itemData?.card?.info;

    const dispatch = useDispatch();

    const handleAddItem = (itemData) => {
        dispatch(addItem(itemData));
    }


    return (
        <div className="cartMemu"> 
            <div className="cartMenuLeft">
                <h4 className="cart_details">{name}</h4>
                <h5 className="cart_details">₹ {price/100 || defaultPrice/100}</h5>
                <h5 className="cart_details grayTxt">{category}</h5>
                <div className="add" onClick={() => handleAddItem(itemData)}> Add </div>
            </div>
            <div className="cartMenuRight">
                <img className="CartMemu-img" src = {FOOD_IMG_URL + imageId} />
            </div>
        </div>
    )
}
export default ResMenu3;