import{restpic} from './Utils/constants';

var Bodyitems=({res})=>{
    const {name,cuisines,address,avgRating,sla}=res.info;

    
return(
    
    <div className="restaurant">
                    <div>
                        <img src={restpic+res.info.cloudinaryImageId} alt="restaurant-pic"></img>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{cuisines.join(", ")}</p>
                        <p>{address}</p>
                        <span>{avgRating} star</span><span>{sla.deliveryTime} mins</span>
                    </div>
                </div>
)

}
export default Bodyitems;