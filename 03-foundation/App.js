import React from "react";
import ReactDOM from "react-dom/client";

//jsx --- html or xml like syntax
//jsx is converted before reaching js engine - parcel(manager) -babel(package)
//jsx => babel converts React.createElement => ReactcreateElement Object => HTMLElement(render)

//recat functional components
//js function with jsx is called funtional components

const Title = () => {
  <h1>Hello world</h1>;
};

// component composition => component inside in a component

const HeadingComponent = () => {
  <div>
    <Title />
    <h1>hello how r u </h1>;
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
