import React, {Component} from "react";


class Header extends Component { 
     render(){  
          return (
               <div className="navbar">
                    <p className="logo">PROFILER</p>
                    <nav>
                         <ul>
                              <li><a href="/">Home</a></li> 
                              <li><a href="/">Friends</a></li> 
                              <li><a href="/">Skills</a></li> 
                              <li><a href="/">Contact</a></li>     
                               
                         </ul>
                    </nav>
               </div>
          );  
     }
}

export default Header;