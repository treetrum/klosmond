import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../scss/main.scss';

import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta http-equiv="X-UA-Compatible" content="ie=edge" />
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
						integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
						crossorigin="anonymous"
					/>
					<link href="https://fonts.googleapis.com/css?family=Lato:300,300i,700,700i" rel="stylesheet" />
					<title>{data.site.siteMetadata.title}</title>
				</Helmet>
				<Nav />
				{children}
				<Footer />
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
