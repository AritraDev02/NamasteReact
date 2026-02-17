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

var jsxheading=<h1>Hello World From JSX!,its a JAX Heading</h1>

var root=ReactDOM.createRoot(document.getElementById("container"));
root.render(jsxheading);