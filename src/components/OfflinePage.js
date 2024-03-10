


OfflinePage = () => {
    return (
        <div className="Offline">
            <div className="OffTop"> 
                <img className= "OffLogo" src = "https://img.freepik.com/premium-vector/cute-alien-flying-planet-with-ufo-meteorite-space-cartoon-icon-illustration_138676-2903.jpg?w=740"/>
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