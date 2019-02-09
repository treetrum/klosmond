import React from 'react';
import format from 'date-fns/format';

const Footer = () => {
	const currentYear = format(new Date(), 'YYYY');
	return (
		<footer className="footer">
			<div className="container">
				<p>Katy Omsond &copy; Copyright {currentYear}. All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
