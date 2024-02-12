import ResCard from "./ResCard";
import {useState, useEffect} from "react";

const Body =()=>{
    let [ListRes, setListRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LI");

        const json = await data.json();
        
        setListRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}

            <div className = "filter">
                <button className = "fliter-btn" onClick = {() => {
                    const filtered = ListRes.filter((res) => res.info.avgRating > 4);
                    setListRes(filtered);
                    }} > Top Retaled Resturent 
                </button>
            </div>
            
            <div className="res-container">
                {
                    ListRes.map((resturent) => <ResCard key = {resturent.info.id} resData={resturent}/>)
                }
            </div>
        </div>
    )
}

export default Body;