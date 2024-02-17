import { resMenu_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import ResMenu1 from "./ResMenu1";
import {useParams} from "react-router-dom"
import ResMenu2 from "./ResMenu2";
import ResMenu3 from "./ResMenu3";
import ResMenuShimmer from "./ResMenuShimmer";

const ResMenu = () => {
    const{ id } = useParams();
    const [menuList, setmenuList] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="+ id );
        const json = await data.json();
        setmenuList(json?.data); //complete later
    }
    if(menuList == null) return <ResMenuShimmer/>;

       const {info} = menuList?.cards[0]?.card?.card;

       const {offers} = menuList?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
       
       const {itemCards} = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="menu">
            <ResMenu1 menuData = {info}/>
            <div className="offer">
                {offers.map((offer) => 
                    <ResMenu2 key = {offer.info.restId} offerData = {offer} />
                )}
            </div>
            <h2 className="middle">Recommended ({itemCards.length}) </h2>
            <div className="recommended">
                {
                    itemCards.map((item) => 
                        <ResMenu3 key = {item.card.info.id} itemData ={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default ResMenu;