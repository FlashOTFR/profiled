import React, { Component } from 'react';
import "./style.css";

class About extends Component {
    state = {  }
    render() { 
       return ( 
           <div>
               <div className="row">
                   
               </div>

               <div className="row">
                   <div className="col-md-12">
                    <div className="announcement">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                             <h1>HELLO!</h1>
                                <div className="about-content">
                                <p>My name is Randall Burgess, and I am a full stack web developer!  I learned how to create full web apps using the MERN stack at the University of Washington coding boot camp program that ended in May 2020.  I am incredibly enthusiastic about programming, and am currently engaged in finding a great development team to join.</p>

                                <p>I was inspired to become a developer by working at Trilogy Education Services, a start up at the time that developed boot camp programs.  After spending a few years assisting other people to become professional programmers, I was able to join the class myself.  After 6 months of intense education, I am now finally able to realize my ultimate goal of joining the professional coding world!</p>

                                <p>Beyond working on web apps, I do enjoy a vibrant host of activities.  I am an established multip instrumentalist and love to get together with friends to learn a few songs and have a great time playing them.  Like any great red blooded nerd, I also enjoy playing video games with friends in my free time (lately games like Among Us have stolen my fancy.  I also love to cook, so if you have a favorite recipe, I'd love to hear about it!</p>

                                <p>I hope this quick glimpse into my person has given you some insight to whether or not we may be a compatible fit to work on a team together.  If so, please feel free to reach out to me using my contact information.  I'm excited to begin new projects and try new technologies, I hope that is something we have in common!</p>

                             </div>
                                
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                   </div>
               </div>

               <div className="row">
                   
               </div>
           </div>
        );
    }
}

export default About;