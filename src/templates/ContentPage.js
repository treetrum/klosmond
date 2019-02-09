import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// import config from '../data/config';

export default ({ children, title, hideTitle, ...remainingProps }) => {
	return (
		<StaticQuery
			query={graphql`
				query SiteMetadataQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => (
				<article {...remainingProps}>
					<Helmet>
						<title>
							{title} | {data.site.siteMetadata.title}
						</title>
					</Helmet>
					<div className="container">
						{!hideTitle && <h1 className="priority-1">{title}</h1>}
						<div className="rte">{children}</div>
					</div>
				</article>
			)}
		/>
	);
};
