import React, {Component} from 'react';// we have to import react "Component" from react to add the Component property in'App
// class

// let first = React.createElement('h1', null, "Hello React");
// export default first;


class App extends Component {//extends component
     render(){//method 
          // return React.createElement("h1",null,"Hello react from component");
          return  <h1>Hello, This message is comming from JSX.</h1>//using JSX

     }
}

export default App;//eport 'App' class to index.js