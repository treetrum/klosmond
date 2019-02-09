const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const projectTemplate = path.resolve('./src/templates/Project.js');
	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							tag
							slug
						}
					}
				}
			}
		}
	`).then(res => {
		if (res.errors) {
			return Promise.reject(res.errors);
		}
		res.data.allMarkdownRemark.edges.forEach(({ node }) => {
			const slug = node.frontmatter.slug;
			createPage({
				path: slug,
				component: projectTemplate,
				context: {
					slug
				}
			});
		});
	});
};
