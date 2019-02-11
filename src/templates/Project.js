import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const Project = ({ data }) => {
	const { title, tag, images, content } = data.prismicProjects.data;
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
								<div className="rte" dangerouslySetInnerHTML={{ __html: content.html }} />
							</article>
						</div>
						{images && (
							<div className="small-12 medium-8 columns image-col">
								{images
									.map(i => i.image.localFile)
									.map(({ childImageSharp, id }, index) => (
										<Img
											key={id}
											fluid={childImageSharp.fluid}
											backgroundColor={index % 2 === 0 ? '#FFECE8' : '#FFFFFF'}
										/>
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
	query ProjectByPath($prismicId: String!) {
		prismicProjects(prismicId: { eq: $prismicId }) {
			data {
				title
				tag
				content {
					html
				}
				images {
					image {
						localFile {
							childImageSharp {
								fluid(maxWidth: 1560, quality: 70) {
									...GatsbyImageSharpFluid
								}
							}
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
