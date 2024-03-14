import { useSelector } from "react-redux"


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    
    return (
        <div>
            <h2> cart items </h2>
            {
                cartItems.map((data) => (<cartSection key = {data?.card?.info?.id} itemData = {data}/>)) 
            }
        </div>
    )   
};

export default Cart;