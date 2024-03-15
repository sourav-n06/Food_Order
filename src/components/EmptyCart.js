const EmptyCart = ( )=>{
    return (
        <div className="empCart">
                <img className= "empImg" src = "https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"/>
                <p className="emptxt"> Your cart is empty</p>
                <p className="emptxtbtn"> Looks like you have not added anything to your cart.</p>
                <p className="emptxtbtn"> Go ahead & explore top category</p>
        </div>
    )
}
export default EmptyCart;