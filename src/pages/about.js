import React from 'react';
import Layout from '../components/layout';
import ContentPage from '../templates/ContentPage';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const About = ({ data }) => {
	const {
		image,
		title,
		content: { html: content }
	} = data.prismicAboutPage.data;
	return (
		<Layout>
			<ContentPage title={title} hideTitle>
				<div className="row">
					<div className="medium-6 large-4 columns">
						<Img fluid={image.localFile.childImageSharp.fluid} backgroundColor="#FFECE8" />
					</div>
					<div className="medium-6 large-4 columns">
						<article>
							<h1 className="priority-1">{title}</h1>
							<div className="rte" dangerouslySetInnerHTML={{ __html: content }} />
						</article>
					</div>
				</div>
			</ContentPage>
		</Layout>
	);
};

export const query = graphql`
	query aboutPageQuery {
		prismicAboutPage {
			data {
				image {
					localFile {
						childImageSharp {
							fluid(maxWidth: 700, quality: 70) {
								...GatsbyImageSharpFluid_noBase64
							}
						}
					}
				}
				title
				content {
					html
				}
			}
		}
	}
`;

export default About;
