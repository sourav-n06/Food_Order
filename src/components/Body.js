import ResCard from "./ResCard";
import {useState, useEffect} from "react";  
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
import ResCardWithOffer from "./ResCardWithOffer";
import useBanner from "../utils/useBanner";
import { Banner_imgs } from "../utils/constants";

const Body =()=>{
    let [ListRes, setListRes] = useState([]);
    let [findTxt, setfindTxt] = useState("");
    let [filterData, setfilterData] =useState([]);
    const[bannerList, setbannerList] = useState([]);

    let onlineStts = useOnlineStatus();
    const banner = useBanner();
    
    const ResCardOffer = ResCardWithOffer(ResCard); // Higher Order Function 

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LI");

        const json = await data.json();

        setListRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setfilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(!onlineStts) return <OfflinePage/>;
    
    if(ListRes.length === 0) return <Shimmer/>;
    


    return (
        <div className="body">
            {/* <div className="search">Search</div> */}

            <div className = "filter">

                <div className ="filter-left">
                    <input className = "input" type = "text" value = {findTxt} onChange = {(txt) => {
                            setfindTxt(txt.target.value);
                    }}/>
                    <button className = "input-btn" onClick = {() => {
                        const filterTxt = ListRes.filter((res) => 
                        res.info.name.toLowerCase().includes(findTxt.toLowerCase()));

                        setfilterData(filterTxt);
                    }}>Search</button>
                </div>


                <div className ="filter-right">
                    <button className = "fliter-btn" onClick = {() => {
                        const filtered = ListRes.filter((res) => res.info.avgRating > 4);
                        setListRes(filtered);
                        }} > Top Retaled Restaurants
                    </button>
                </div>
            </div>


            <div className="bannerFoods">
                <div className="bannerFoodsTxt">What's on your mind?</div>
                <div className="bannerFoodsImg">
                    {
                        banner?.info.map((food) => {
                            return (<img key = {food.id} className="bannerFoodsInnerImg" src = {Banner_imgs + food.imageId}></img>)
                        })
                    }
                </div>
            </div>

            <div className="ResFoodsTxt">Top restaurant chains in Kolkata </div>

            <div className="res-container">
                {
                    filterData.map((resturent) => {
                        // when this condition will true then we call Our Higher Order Function
                        return resturent.info.isOpen === true ?
                        (<ResCardOffer key = {resturent.info.id} resData={resturent}/>) :
                        (<ResCard key = {resturent.info.id} resData={resturent}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Body;