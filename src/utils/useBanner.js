import { useEffect, useState } from "react";
import { Banner_API_URL } from "./constants";

const useBanner = () =>{
    const[bannerList, setbannerList] = useState();
    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(Banner_API_URL);
        const json = await data.json();

        setbannerList(json?.data?.cards[0]?.card?.card?.imageGridCards); 
    }

    return bannerList;
}

export default useBanner;