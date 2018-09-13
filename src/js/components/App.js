import React, { Component } from 'react';
import Logo from '../../images/logo.png';

export default class App extends Component {
    render() {
        return (
            <div className="page-wrap">
                <header className="nav">
                    <div className="container">
                        <div className="nav-items">
                            <div className="nav-item toggler">menu</div>
                            <div className="nav-item logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="nav-item links">
                                <li>
                                    <a
                                        href="#portfolio"
                                        className="active link-text"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="link-text">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="link-text">
                                        Contact
                                    </a>
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
                <main className="portfolio-grid">
                    <div className="container">
                        <div className="grid-items">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                                <div className="grid-item">
                                    <img
                                        src={`https://picsum.photos/500/500/?image=${i +
                                            106}`}
                                        alt=""
                                    />
                                    <p>
                                        <a href="#" className="link-text">
                                            Title of work
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
