import Bodyitems from "./Bodyitems";
import rawdata from "./Utils/mock_data";

//Body Element
var Bodycomp=()=>{
    return(
        <div className="bodycomp">
            <div className="restraunt-block">
                {rawdata.map(a=>(
                    <Bodyitems key={a.card.card.info.id} res={a.card.card}/>
                ))}
                
            </div>
        </div>
    )
}

export default Bodycomp;