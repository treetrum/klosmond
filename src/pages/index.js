import React from 'react';
import { graphql } from 'gatsby';
import PortfolioGrid from '../components/PortfolioGrid';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	const projects = data.allMarkdownRemark.edges.map(({ node }) => node);
	return (
		<Layout>
			<PortfolioGrid projects={projects} />
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
							publicURL
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
