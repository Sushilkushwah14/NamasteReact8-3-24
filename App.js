import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement(
//     "h1",{id:"heading"},
//     "namaste react"
// )
// console.log(heading);

//they are same 

const Title=()=>(
            [
               <h1 id="heading" className="root" tabIndex="1 ">
                   Using title componenet inside component
               </h1>,
            ]
        )
const Title2=(
            [
               <h1 id="heading" className="root" tabIndex="1 ">
                   Using title2 js inside component
               </h1>,
            ]
        )

const Heading=()=>(
    <div id="container">
       <Title/>
       {Title()}
       {Title2}
       {console.log("jai balaji")}  
      <h1 className="heading">Namaste React by H1</h1>
    </div>
)
ReactDOM.createRoot(document.getElementById("root"))
    .render(<Heading/>)
    