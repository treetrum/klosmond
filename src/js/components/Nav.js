import React from 'react';
import Logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <header className="nav">
            <div className="container">
                <div className="nav-items">
                    <div className="nav-item toggler">menu</div>
                    <div className="nav-item logo">
                        <NavLink to="/">
                            <img src={Logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="nav-item links">
                        <li>
                            <NavLink exact to="/" className="link-text">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="link-text">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="link-text">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <a href="#instagram" className="link-text">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </header>
    );
};
