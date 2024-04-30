import React from "react";
import ReactDOM from "react-dom";

//jsx --- html or xml like syntax
//jsx is converted before reaching js engine - parcel(manager) -babel(package) js complier
//jsx => babel converts React.createElement => ReactcreateElement Object => HTMLElement(render)

//recat functional components
//js function with jsx is called funtional components

const elem = <span>jsx</span>;

const Title = () => {
  return (
    <h2>
      {elem}
      Hello world
    </h2>
  );
};

// component composition => component inside in a component
// code is readable bcz of jsx

const name = "nix vs aux";

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <Title></Title>
      {Title()}
      <h2>{name}</h2>
      <h2>{449 / 47}</h2>
      <h3>hello how r u </h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
