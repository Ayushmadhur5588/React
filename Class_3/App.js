import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = () => (
  <div>
   {Heading}
    <h3>Hi</h3>
  </div>
);


const Heading = (
    <h5>
         <Heading1 />
    </h5>
);

// A js Function that return a peice of JSX code called functional component
//React Element ~ JSX is also a react element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading1 />);
//root.render(heading1);

//classNAme ~ class in html
// if writing JSX in multi lines, use brackets
