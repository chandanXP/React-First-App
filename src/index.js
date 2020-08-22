import React from "react";//imports react from react library
import ReactDOM from "react-dom";//import reactDOM
// import first from './app';
import App from "./app"//import app.js file

// let first = <h1>Welcome to React World.</h1>;
// ReactDOM.render(first, document.getElementById("root"));

// ReactDOM.render(first, document.getElementById("root"));


// let second = <h1>Now you are a React Developer.</h1>;
// ReactDOM.render(second, document.getElementById("root"));


ReactDOM.render(<App />, document.getElementById("root"));//render the components of "App" in the into div "roots"


