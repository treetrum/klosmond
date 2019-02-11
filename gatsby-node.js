const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const projectTemplate = path.resolve('./src/templates/Project.js');

	return graphql(`
		{
			allPrismicProjects {
				edges {
					node {
						prismicId
						slugs
					}
				}
			}
		}
	`).then(res => {
		if (res.errors) {
			return Promise.reject(res.errors);
		}
		res.data.allPrismicProjects.edges.forEach(({ node }) => {
			const slug = node.slugs[0];
			createPage({
				path: slug,
				component: projectTemplate,
				context: {
					prismicId: node.prismicId
				}
			});
		});
	});
};
