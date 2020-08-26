import React, {Component} from 'react';// we have to import react "Component" from react to add the Component property in'App
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Home from './Components/pages/home';
import "./Assests/header.css";
import "./Assests/footer.css";
import "./Assests/home.css";





class App extends Component {//extends component
     render(){  
          return(
               <>
                    <Header />
                    <Home />
                    <Footer />
               
               </>
          );    
     }
}

export default App;//export 'App' class to index.js