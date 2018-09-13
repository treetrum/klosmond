import React, { Component } from 'react';
import Logo from '../../images/logo.png';

export default class App extends Component {
    render() {
        return (
            <header className="nav">
                <div className="container">
                    <div className="inner">
                        <div className="nav-items">
                            <div className="nav-item logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="nav-item links">
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                                <li>
                                    <a href="#instagram">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
