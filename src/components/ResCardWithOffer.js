const ResCardWithOffer = (ResCard)=>{
    return (props)=>{
        const {resData} = props;
        const {aggregatedDiscountInfoV3} =resData?.info;
        return (
            <div>
                <label className="offerLabel">{aggregatedDiscountInfoV3?.header}{" "}{aggregatedDiscountInfoV3?.subHeader}</label>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCardWithOffer;