module.exports = {
	siteMetadata: {
		title: 'Katy Osmond Design'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/projects/`
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590
						}
					}
				]
			}
		}
	]
};
