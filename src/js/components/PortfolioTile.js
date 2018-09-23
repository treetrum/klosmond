import React from 'react';
import { Link } from 'react-router-dom';

export default ({ i }) => {
    return (
        <Link to="/project/something" className="portfolio-tile">
            <img
                src={`https://picsum.photos/500/500/?image=${i + 106}`}
                alt=""
            />
            <p className="link-text">Title of work</p>
        </Link>
    );
};
