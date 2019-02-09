import React from 'react';
import { Link } from 'gatsby';

export default ({ project, i }) => {
	const { title, slug, thumbnail } = project.frontmatter;
	const thumbURL = thumbnail ? thumbnail.publicURL : 'http://placehold.it/500';
	return (
		<Link to={`/${slug}`} className="portfolio-tile">
			<div className="portfolio-tile__thumb">
				<img src={thumbURL} alt="" />
			</div>
			<p className="link-text">{title}</p>
		</Link>
	);
};
