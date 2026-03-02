import Bodyitems from "./Bodyitems";
import rawdata from "./Utils/mock_data";
import { useState } from "react";


//Body Element
var Bodycomp=()=>{

let[resdata,setResdata]=useState(rawdata);

    return(
        <div className="bodycomp">

            <button className="Filter-btn" onClick={()=>{
                debugger;
                var filtereddata=rawdata.filter((data)=>data.card.card.info.avgRating>4.4);
                setResdata(filtereddata);
            }}>Filter</button>
            <div className="restraunt-block">
                {resdata.map(a=>(
                    <Bodyitems key={a.card.card.info.id} res={a.card.card}/>
                ))}
                
            </div>
        </div>
    )
}

export default Bodycomp;