import { useSelector } from "react-redux"
import CartSection from "./cartSection";
import EmptyCart from "./EmptyCart";
import {useDispatch} from "react-redux"
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const RemoveAll = () => {
        dispatch(clearCart());
    };


    if(cartItems.length == 0) return <EmptyCart/>
    return (
        <div className="cartSection">
            <div className="cartContainer">
                <h2 className="catagoryAccordionTxt"> cart items </h2>
                <div className="cartBtn" onClick={() => RemoveAll()}>Clear all</div>
            </div>
            {
                cartItems.map((data) => (<CartSection key = {data?.card?.info?.id} itemData = {data}/>)) 
            }
            <div className="buy">
                <div className="addMore" >Add more</div>
                <div className="orderNow" >Order now</div>
            </div>
        </div>
    )   
};

export default Cart;