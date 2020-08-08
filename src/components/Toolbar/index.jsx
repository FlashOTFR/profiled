import React from 'react';
import './style.css';
import '../DrawerToggleButton/index';
import DrawerToggleButton from '../DrawerToggleButton/index';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo">
                <a href="/profiled/#">Randall Burgess</a>
            </div>
            <div className="spacer">

            </div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li>
                        <a href="/profiled/#/about">About</a>
                    </li>

                    <li>
                        <a href="/profiled/#/portfolio">Portfolio</a>
                    </li>

                    <li>
                        <a href="/profiled/#/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;