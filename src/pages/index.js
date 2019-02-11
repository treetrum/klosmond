import React from 'react';
import { graphql } from 'gatsby';
import PortfolioTile from '../components/PortfolioTile';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	const projects = data.allPrismicProjects.edges.map(({ node }) => node);
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
		allPrismicProjects {
			edges {
				node {
					slugs
					data {
						title
						thumbnail {
							localFile {
								childImageSharp {
									fluid(maxWidth: 700, quality: 70) {
										...GatsbyImageSharpFluid_noBase64
									}
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
