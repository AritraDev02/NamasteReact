import React from"react";
import ReactDOM from"react-dom/client";
import Headercomp from"./Components/Headercomp";
import Bodycomp from"./Components/Bodycomp";
import rawdata from "./Components/Utils/mock_data";

//app layout
var Appcomp=()=>{
    return <div className="applayout">
        <Headercomp/>
        <Bodycomp resdata={rawdata}/>
        
    </div>
}




var root=ReactDOM.createRoot(document.getElementById("container"));
root.render(<Appcomp/>);