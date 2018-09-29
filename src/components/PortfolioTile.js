import React from 'react';
// import { Link } from 'react-router-dom';

import exampleImage from '../images/work-example.jpg';

export default ({ i }) => {
    return (
        <div to="/project/something" className="portfolio-tile">
            <img src={exampleImage} alt="" />
            <p className="link-text">Title of work</p>
        </div>
    );
};
