import ResMenu3 from "./ResMenu3";

const ResMenu4 = ({itemData}) => {
    console.log(itemData);
    return (
        <div>
            {
                itemData.map((data) => (<ResMenu3 key = {data?.card?.info?.id} itemData = {data}/>)) 
            }
        </div>
    )
}

export default ResMenu4;