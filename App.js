import React from "react";
import ReactDOM from "react-dom/client";



const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"this is namaste react!"),
        React.createElement("h2",{},"i am h2 tag hii sushil")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag")
    ]),

]);


ReactDOM.createRoot(document.getElementById("root"))
.render(parent)