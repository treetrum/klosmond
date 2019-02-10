import React from 'react';
import { graphql } from 'gatsby';
import PortfolioTile from '../components/PortfolioTile';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	const projects = data.allMarkdownRemark.edges.map(({ node }) => node);
	return (
		<Layout>
			<main className="portfolio-grid">
				<div className="container">
					<div className="grid-items">
						{projects.map((project, i) => (
							<PortfolioTile key={i} project={project} i={i} />
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
};

export const indexQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { fields: frontmatter___order }) {
			edges {
				node {
					frontmatter {
						title
						slug
						order
						thumbnail {
							childImageSharp {
								fluid(maxWidth: 700, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
