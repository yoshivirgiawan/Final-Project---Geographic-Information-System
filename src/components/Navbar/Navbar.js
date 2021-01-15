import React from 'react';
import Logo from '../../images/logo.png';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import '../../css/Navbar.css';
import { RiMenuLine } from "react-icons/ri";
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Navbar(props) {
    const {onClickMenu} = props;

    return (
        <div className="header-container">
            <div className="header">
                <div className="container py-4 d-flex justify-content-between align-items-center">
                    <div className="left-side">
                        <div className="logo-navbar d-flex align-items-center">
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                width="50px" 
                                height="50px" 
                            />
                            <div className="logo-name ml-3">
                                JobPlanet
                            </div>
                        </div>
                    </div>

                    <div className="right-side">
                        <ul className="navbar-content d-flex align-items-center m-0">
                            <li >
                                <NavLink exact={true} to="/" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: "/maps",
                                    data: [-7.7394, 112.5099]
                                }} activeClassName="active">
                                    Street Maps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/search-all-jobs" activeClassName="active">
                                    List Jobs
                                </NavLink>
                            </li>
                        </ul>
                        <RiMenuLine className="hamburger-menu" style={{width: "24px", height: "24px"}} onClick={onClickMenu} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;