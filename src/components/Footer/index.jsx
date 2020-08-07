import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
    <div className="container">
      <div className="row">
      
        <div className="col-md-4">
          <a href="https://www.linkedin.com/in/randall-burgess-a93a8451/"><h3>LinkedIn</h3></a>
        </div>
      
        <div className="col-md-4">
          <h1>Randy Is Cool</h1>
        </div>
      
        <div className="col-md-4">
      <a href="https://github.com/FlashOTFR"><h3>GitHub</h3></a>
        </div>

      </div>
    </div>
</footer>
         );
    }
}
 
export default Footer;