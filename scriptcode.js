// var heading=React.createElement("h1",{id:"firstheading",className:"fqef"},"Hello World From react!\n from another js page");

// console.log(heading);

//         var root=ReactDOM.createRoot(document.getElementById("container"));
//         root.render(heading);


//The Second phase prac [create a dom tree]


var parent=React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child1"},
                [
                        React.createElement("h1",{},"Hii i'm the h1 from child:1")
                ]
                //2e12e
        ),

        React.createElement("div",{id:"child2"},
                [
                        React.createElement("h1",{},"Hii i'm the h1 from child:2"),
                        React.createElement("h2",{},"Hii i'm the h2 from child:2")
                ]
        )
        
]//trhrh
);


var root=ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);