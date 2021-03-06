import React, { Component } from 'react'; 
import { HashRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import DrawerToggleButton from './components/DrawerToggleButton';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    }); 
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
      
    }
    return (
      <HashRouter>
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{marginTop: '64px'}}>        
              <Route exact path="/" component={Home} />
              <Route exact path="/profiled" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/about" component={About} />
          </main>
        </div>
      </HashRouter>
    )}



}

export default App;

