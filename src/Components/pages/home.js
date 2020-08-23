import React, {Component} from "react";

class Home extends Component { 
     render(){  
          return (
               <div className="container">
                    <div className="homeBanner">
                         <p className="bannerText"> You Are watching Website banner of Profiler. Here  we
                              will add some option for you with some interesting font font and styling, hope you will like it.</p>
                         <p>You are in Home page.</p>
                    </div>
                    
                    <div className="webDescription">
                         <p>Note that the development build is not optimized.
                              To create a production build, use npm run build.</p>
                         <p>Here is the Website description you will find here some  features and some option of the website with moderately high font size,stay tuned.</p>
                    </div>
                    
                    <div className="userSection">
                         <h2 className="userName">User Name</h2>
                         <p className="UserDescription">some some description about user and his skills, occupation and some interests or hobbies </p>
                    </div>
                    <div className="userPicture">
                         <p className="userPhoto">User Photo</p>
                    </div>
               </div>
          );  

     }
}

export default Home;