import React from 'react';

export default ({ children, title }) => {
    return (
        <article>
            <div className="container">
                <h1 className="page-title">{title}</h1>
                {children}
            </div>
        </article>
    );
};
