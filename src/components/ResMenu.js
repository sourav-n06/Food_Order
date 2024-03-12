import { resMenu_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import ResMenu1 from "./ResMenu1";
import {useParams} from "react-router-dom"
import ResMenu2 from "./ResMenu2";
import ResMenu3 from "./ResMenu3";
import ResMenuShimmer from "./ResMenuShimmer";
import useResList from "../utils/useResList";
import ResCatagory from "./ResCatagory";

const ResMenu = () => {
    const{ id } = useParams();

    menuList = useResList(id);  // Coustom Hook for Fetching data and make it for Abstruct and Readable

    if(menuList == null) return <ResMenuShimmer/>;

       const {info} = menuList?.cards[0]?.card?.card;

       const {offers} = menuList?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
       
       const {itemCards} = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

       const catagories = 
       menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) =>
       (item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

       //console.log(catagories);

    return (
        <div className="menu">
            <ResMenu1 menuData = {info}/>
            <div className="offer">
                {offers.map((offer) => 
                    <ResMenu2 key = {offer?.info?.restId} offerData = {offer} />
                )}
            </div>

            {/* <h2 className="middle">Recommended ({itemCards.length}) </h2>
            <div className="recommended">
                {
                    itemCards.map((item) => 
                        <ResMenu3 key = {item.card.info.id} itemData ={item}/>
                    )
                }
            </div> */}
            {
                catagories.map((catagory) => 
                (<ResCatagory key = {catagory?.card?.card?.title} data = {catagory?.card?.card} />))
            }
        </div>
    )
}

export default ResMenu;