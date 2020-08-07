import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo-box">
                            <h1>CONTACT ME</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-text">
                            <h3>Feel free to reach out to me with any projects or career opportunities that you would like to discuss</h3>
                        </div>
                    </div>
                    
                    <div className="col-md-4"></div>
                    
                    <div className="col-md-4">
                        <div className="contact-box">
                            <div className="contact-box-content">
                                <ul>
                                    <li>
                                        <h2>Email:</h2>
                                        <h3>randallallenburgess@gmail.com</h3>
                                    </li>
                                    <br/>
                                    <br/>
                                    <li>
                                        <h2>Phone Number:</h2>
                                        <h3>(360)402-2780</h3>
                                    </li>
                                    <br/>
                                    <br/>
                                    <li>
                                        <a href="https://www.linkedin.com/in/randall-burgess-a93a8451/"><h3>LinkedIn</h3></a>
                                        <a href="https://github.com/FlashOTFR"><h3>GitHub</h3></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
         );
    }
}
 
export default Contact;

