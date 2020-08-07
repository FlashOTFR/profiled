import React, { Component } from 'react';
import './style.css';     


class Timer extends Component {
    state = { 
        date: new Date(),

     }

    callMe(){
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }



    render() { 
        return ( 
            <div className="Timer">
                <h1>{this.state.date.toLocaleTimeString()}</h1>    
                {this.callMe()}
            </div>
         );
    }
}
 
export default Timer;