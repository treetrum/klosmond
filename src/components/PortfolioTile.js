import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectTile = ({ project }) => {
	const { title, slug, thumbnail } = project.frontmatter;
	const thumbURL = thumbnail ? thumbnail.publicURL : 'http://placehold.it/500';
	return (
		<Link to={`/${slug}`} className="portfolio-tile">
			<div className="portfolio-tile__thumb">
				<Img fluid={thumbnail.childImageSharp.fluid} backgroundColor="#FFECE8" />
			</div>
			<p className="link-text">{title}</p>
		</Link>
	);
};

export default ProjectTile;
