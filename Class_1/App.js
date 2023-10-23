const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React 🚀"
);
console.log(heading); // this is an js object/ react element
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
//root.render(heading); // render is converting the above react element to h1 tag

const heading1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "head" }, "h1 tag")
  )
);

root.render(heading1);