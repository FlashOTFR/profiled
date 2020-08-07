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
                <a href="/">Randall Burgess</a>
            </div>
            <div className="spacer">

            </div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>

                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>

                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;