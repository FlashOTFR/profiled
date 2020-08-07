import React, { Component } from 'react';   
import Pic from '../assets/picture-min.jpg';
import Timer from '../Timer';
import './style.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

<div className="container">
    <div className="row">

        <div className="col-md-12">
            <div className="center-home"> 
                <h1 className="name">RANDALL BURGESS</h1>

                <img src={Pic} className='pic' />
                <div className="time">
                    <Timer />
                </div>
            </div>
        </div>

    </div>
</div>

</div>
         );
    }
}
 
export default Home;