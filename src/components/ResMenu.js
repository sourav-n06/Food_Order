import { resMenu_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const ResMenu = () => {


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(resMenu_URL);
        const json = data.json();
        console.log(json);
    }


    return (
        <div>
            <h2> Name of the Restaurant</h2>
            <h3>Menu</h3>
            <h4>Biriyani </h4>
        </div>
    )
}

export default ResMenu;