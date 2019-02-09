import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';

export default ({ data }) => {
	const project = data.markdownRemark;
	const { title, tag, images } = project.frontmatter;
	return (
		<Layout>
			<Helmet>
				<title>
					{title} | {data.site.siteMetadata.title}
				</title>
			</Helmet>
			<div className="container">
				<div className="row">
					{images && (
						<div className="medium-8 columns">
							{images.map(({ publicURL }) => (
								<img src={publicURL} alt="" style={{ width: '100%' }} />
							))}
						</div>
					)}
					<div className={`medium-${images ? 4 : 8} columns`}>
						<h1 className="priority-1">{title}</h1>
						<p className="tag">{`// ${tag}`}</p>
						<div className="rte" dangerouslySetInnerHTML={{ __html: project.html }} />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const singleProjectQuery = graphql`
	query ProjectByPath($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				slug
				title
				tag
				images {
					publicURL
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;
