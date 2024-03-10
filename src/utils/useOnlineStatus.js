import { useEffect, useState } from "react"


const useOnlineStatus = () => {
    const [OnlineStts, setOnlineStts] = useState(true);

    useEffect(() =>{
        window.addEventListener("online", () => {
            setOnlineStts(true);
        });

        window.addEventListener("offline", () => {
            setOnlineStts(false);
        });
    }, []);

    return OnlineStts;
}

export default useOnlineStatus;