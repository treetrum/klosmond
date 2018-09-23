import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Nav from './Nav';
import PortfolioGrid from './PortfolioGrid';
import About from '../pages/About';
import NotFound from '../pages/404.js';
import Contact from '../pages/Contact';

import config from '../data/config';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Helmet>
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                        <link
                            rel="stylesheet"
                            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                            crossorigin="anonymous"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i"
                            rel="stylesheet"
                        />
                        <title>{config.siteName}</title>
                    </Helmet>
                    <Nav />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={() => <PortfolioGrid />}
                        />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}
