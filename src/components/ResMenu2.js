const ResMenu2 = (props) => {
    const {offerData} = props;
    console.log(offerData)
    const {
        couponCode,header,
        description
     } = offerData?.info;
    return (
        <div className = "offerMenu">
            <div className="offerMenu-top">
                {header}
            </div>
            <div className="offerMenu-bottom">
                {couponCode} | {description}
            </div>
        </div>
    )
}

export default ResMenu2;