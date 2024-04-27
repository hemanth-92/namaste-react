import React from "react";
import ReactDOM from "react-dom";



//jsx --- html or xml like syntax
//jsx is converted before reaching js engine - parcel(manager) -babel(package)


const jsxheading = <h1 id="heading">hello jsx</h1>;
//console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);


