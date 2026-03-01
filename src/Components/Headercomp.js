import  logo  from "./Utils/constants";

var Headercomp=()=>{
    return <div className="headercomp">
        <div className="header-items">
            <div className="logo">
                <img className="brandlogo" alt="brand logo" src={logo}></img>
            </div> 
            <div className="nav-block">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Headercomp;