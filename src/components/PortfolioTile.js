import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectTile = ({ project }) => {
	const {
		slugs,
		data: { title, thumbnail }
	} = project;
	const slug = slugs[0];
	return (
		<Link to={`/${slug}`} className="portfolio-tile">
			<div className="portfolio-tile__thumb">
				<Img fluid={thumbnail.localFile.childImageSharp.fluid} backgroundColor="#FFECE8" />
			</div>
			<p className="link-text">{title}</p>
		</Link>
	);
};

export default ProjectTile;
