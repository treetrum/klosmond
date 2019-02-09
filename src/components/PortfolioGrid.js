import React from 'react';
import PortfolioTile from './PortfolioTile';

export default function PortfolioGrid({ projects }) {
	return (
		<main className="portfolio-grid">
			<div className="container">
				<div className="grid-items">
					{projects.map((project, i) => (
						<PortfolioTile key={i} project={project} i={i} />
					))}
				</div>
			</div>
		</main>
	);
}
