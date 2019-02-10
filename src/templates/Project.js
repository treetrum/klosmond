import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const Project = ({ data }) => {
	const project = data.markdownRemark;
	const { title, tag, images } = project.frontmatter;
	return (
		<Layout>
			<Helmet>
				<title>
					{title} | {data.site.siteMetadata.title}
				</title>
			</Helmet>
			<div className="project-page">
				<div className="container">
					<div className="row">
						<div className={`small-12 medium-${images ? 4 : 8} columns content-col`}>
							<article>
								<h1 className="priority-1">{title}</h1>
								<p className="tag">{`// ${tag}`}</p>
								<div className="rte" dangerouslySetInnerHTML={{ __html: project.html }} />
							</article>
						</div>
						{images && (
							<div className="small-12 medium-8 columns image-col">
								{images.map(({ childImageSharp, id }) => (
									<Img key={id} fluid={childImageSharp.fluid} />
								))}
							</div>
						)}
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
					id
					childImageSharp {
						fluid(maxWidth: 1560, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
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

export default Project;
