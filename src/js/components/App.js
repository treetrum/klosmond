import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import PortfolioGrid from './PortfolioGrid';
import About from '../pages/About';
import NotFound from '../pages/404.js';
import Contact from '../pages/Contact';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={PortfolioGrid} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}
