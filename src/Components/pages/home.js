import React, {Component} from "react";
import chandanPic from "../../photos/igProfile.PNG"
import abhinavPic from "../../photos/igAbhinav.PNG"
import shubhamPic from "../../photos/igShubham.PNG"
import ankitPic from "../../photos/igAnkit.PNG"


class Home extends Component { 
     render(){  
          return (
               <div className="container">
                    <div className="homeBody">
                         <div className="userPicture">
                              <div className="userPhoto">
                                   <img src={chandanPic} alt="chandanPic" /> 
                              </div>
                              
                              <div>
                                   <h1>Chandan</h1> 
                                   <p>Web developer, Student, Bhagwan Parshuram Institute of Technology, CSE</p>      
                              </div>
                         </div>
                         <div className="webDescription">
                              <p> 
                                   I am B-tech 2nd year student of Bhagwan Parshuram Institute of Technology(IPU), I love web development, I'm learning the concepts
                                   of web development and designing. I have not created
                                   so many website as I am a beginner but in future I will create lots of websites for sure. 
                                   I'm also learning data structures and algorithm, I know some programming languages like C/C++, java, javascript.
                                   I can't say I,m pro or experienced in programming but I can solve medium level of problems. I'm just a second year student so can't expect
                                   much about programming experience from me. I Love Playing  Football it and it can be my hobby but due to college studies and traveling
                                    pushes me back from the football ground.
               
                              </p>
                              
                         </div>
                    </div>

                    <div className="footerContainer">
                         <div className="userSection">
                              <h2 className="userName">About Profiler: </h2>
                              <p className="UserDescription"> 
                                   Profiler is profile making website in which you can make your profile and put your description,
                                   your experience and your skill in it. You can share it with your friends or use as a intrduction platform in
                                   in interviews.
                                   you can add your friends to your account, your friends can see your profile, like and comment on your post  
                                   and people also can find your friends. You can share your daily experience and problem you are facing in you life.
                                   This app made using reactjs,and javascript.
                              </p>
                         </div>
                         <div className="social">
                              <div className="socialLogos">
                                   <a href="https://www.instagram.com/ch4nd4n22/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                   <a href="https://twitter.com/yo4chandan"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                   <br></br>
                                   <a href="/"><i class="fa fa-envelope" aria-hidden="true" fa-4x></i></a>
                                   <a href="https://www.facebook.com/profile.php?id=100008397492798"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                              </div>
                              <div className="socialHeading">
                                   Social Media
                              </div>
                         </div>
                    </div>

                    <div className="friendsContainer">
                         <div className="friendsIcon">
                              <div className="friendPhoto">
                                   <img src={abhinavPic} alt="abhinavPic" />
                              </div>
                              <div className="friendName">
                                   Abhinav Jha
                              </div>
                         </div>
                         <div className="friendsIcon">
                              <div className="friendPhoto">
                                   <img src={shubhamPic} alt="shubhamPic" />
                              </div>
                              <div className="friendName">
                                   Shubham Nautiyal
                              </div>
                         </div>
                         <div className="friendsIcon">
                              <div className="friendPhoto">
                                   <img src={ankitPic} alt="ankitPic" />
                              </div>
                              <div className="friendName">
                                   Ankit Kumar
                              </div>
                         </div>
                    </div>
               </div>
          );  

     }
}

export default Home;