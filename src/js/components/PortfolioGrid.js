import React from 'react';
import PortfolioTile from './PortfolioTile';

export default () => {
    return (
        <main className="portfolio-grid">
            <div className="container">
                <div className="grid-items">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                        <PortfolioTile key={i} i={i} />
                    ))}
                </div>
            </div>
        </main>
    );
};
