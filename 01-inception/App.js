// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );

/* <div id="parent">
  <div id="child">
    <h1>this is react code</h1>
    <h2>from namaste react</h2>
  </div>
</div>; */

//createElement creates object

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im learning react"),
    React.createElement("h2", {}, "from namaste react"),
  ])
);

console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //render takes heading (object) and convert into tag
