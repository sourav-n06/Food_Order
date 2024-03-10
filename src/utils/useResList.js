import { useEffect, useState } from "react"
const useResList = (id)=>{
    const [menuList, setmenuList] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="+ id );
        const json = await data.json();
        setmenuList(json?.data); //complete later
    }
    return menuList;
}
export default useResList;