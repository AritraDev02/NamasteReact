// var heading=React.createElement("h1",{id:"firstheading",className:"fqef"},"Hello World From react!\n from another js page");

// console.log(heading);

//         var root=ReactDOM.createRoot(document.getElementById("container"));
//         root.render(heading);


//The Second phase prac [create a dom tree]


import React from"react";
import ReactDOM from"react-dom/client";
// var parent=React.createElement("div",{id:"parent",key:"parent"},
//         [React.createElement("div",{id:"child1",key:"child1"},
//                 [
//                         React.createElement("h1",{key:"h1child1"},"Hii i'm the h1 from child:1")
//                 ]
//                 //2e12e
//         ),

//         React.createElement("div",{id:"child2",key:"child2"},
//                 [
//                         React.createElement("h1",{key:"h1child2"},"Hii i'm the h1 from child:2"),
//                         React.createElement("h2",{key:"h2child2"},"Hii i'm the h2 from child:2")
//                 ]
//         )
        
// ]
// );


// var root=ReactDOM.createRoot(document.getElementById("container"));
// root.render(parent);

var parent=React.createElement("h1",{id:"heading"},"this hello world from react create element");

//var jsxheading=<h1 id="heading" className="chkhead" tabIndex="5">Hello World From JSX!,its a JAX Heading</h1>

//var img=React.createElement("img",{src:"https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=",alt:"car img"})
var img=<img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" alt="Code Image"></img>

var link=(<a id="google-link" href="https://www.google.com" 
    target="_blank">Click Here</a>);

var root=ReactDOM.createRoot(document.getElementById("container"));
//root.render(jsxheading);
root.render(link);




