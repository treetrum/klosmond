import React from 'react';
import Layout from '../components/layout';
import ContentPage from '../templates/ContentPage';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const About = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<ContentPage title="About" hideTitle>
				<div className="row">
					<div className="medium-6 large-4 columns">
						<Img fluid={data.file.childImageSharp.fluid} />
					</div>
					<div className="medium-6 large-4 columns">
						<article>
							<h1 className="priority-1">About</h1>
							<p>
								Katy Osmond is a Sydney based graphic designer who works with both digital and hand
								based mediums, intertwining the both to enhance her work, and explore different
								techniques.
							</p>
							<p>
								She has freelanced for Sydney based studios Onement, La La Land, and the Australian
								branch of Hymix and Hanson construction. Throughout her degree of Visual Communications
								at Western Sydney University, she completed two internships at Terrace Press and Her
								Fashion Box.
							</p>
							<p>
								Her curious mind is always leading her on new adventures and as a freelance designer and
								is always open to new projects to keep her busy in her studio, as well as out and about
								meeting and working with new people.
							</p>
						</article>
					</div>
				</div>
			</ContentPage>
		</Layout>
	);
};

export const query = graphql`
	query aboutPageQuery {
		file(relativePath: { eq: "about.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 700, quality: 70) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default About;
