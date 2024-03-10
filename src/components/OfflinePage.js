


OfflinePage = () => {
    return (
        <div className="Offline">
            <div className="OffTop"> 
                <img className= "OffLogo" src = "https://i.pinimg.com/564x/8c/15/e5/8c15e504b4cdb2d8f4bcba5bccd56b88.jpg"/>
            </div>

            <div className= "OffBottom">
                <h2 className="OffTxt">Looks like you're not connected</h2>
                <h2 className="OffTxt">to a network. Check your </h2>
                <h2 className="OffTxt">settings and try again</h2>
                <h3>Try</h3>
                <ul>
                    <li className="OffTxtLi">Turning off <u>Airplane Mode</u></li>
                    <li className="OffTxtLi">Turning on <u>Mobile data</u> or <u>WiFi</u></li>
                    <li className="OffTxtLi">Checking the signal of your area</li>

                </ul>
            </div>
        </div>
    );
};

export default OfflinePage;