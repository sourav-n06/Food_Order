import ResCard from "./ResCard";
import {useState, useEffect} from "react";  
import Shimmer from "./Shimmer";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const Body =()=>{
    let [ListRes, setListRes] = useState([]);
    let [findTxt, setfindTxt] = useState("");
    let [filterData, setfilterData] =useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LI");

        const json = await data.json();
        
        setListRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
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
                    }}><img className= "search-img" src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" alt="Icon Free Image Search" /></button>
                </div>
                <div className ="filter-right">
                    <button className = "fliter-btn" onClick = {() => {
                        const filtered = ListRes.filter((res) => res.info.avgRating > 4);
                        setListRes(filtered);
                        }} > Top Retaled Resturent 
                    </button>
                </div>
                
                
            </div>
            
            <div className="res-container">
                {
                    filterData.map((resturent) => <ResCard key = {resturent.info.id} resData={resturent}/>)
                }
            </div>
        </div>
    )
}

export default Body;