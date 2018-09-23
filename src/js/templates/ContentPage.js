import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../data/config';

export default ({ children, title, ...remainingProps }) => {
    return (
        <article {...remainingProps}>
            <Helmet>
                <title>
                    {title} | {config.siteName}
                </title>
            </Helmet>
            <div className="container">
                <h1 className="page-title">{title}</h1>
                <div className="rte">{children}</div>
            </div>
        </article>
    );
};
