import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'gatsby';

export default () => {
	return (
		<header className="nav">
			<div className="container">
				<div className="nav-items">
					<div className="nav-item toggler">menu</div>
					<div className="nav-item logo">
						<Link to="/">
							<img src={Logo} alt="" />
						</Link>
					</div>
					<div className="nav-item links">
						<li>
							<Link activeClassName="active" to="/" className="link-text">
								Portfolio
							</Link>
						</li>
						<li>
							<Link activeClassName="active" to="/about" className="link-text">
								About
							</Link>
						</li>
						<li>
							<Link activeClassName="active" to="/contact" className="link-text">
								Contact
							</Link>
						</li>
						<li>
							<a
								href="https://www.instagram.com/_katylou/"
								target="_"
								rel="noopener noreferrer"
								className="link-text"
							>
								<i className="fab fa-instagram" />
							</a>
						</li>
					</div>
				</div>
			</div>
		</header>
	);
};
