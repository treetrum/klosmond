import React from 'react';
import Layout from '../components/layout';
import ContentPage from '../templates/ContentPage';

const IndexPage = () => (
	<Layout>
		<ContentPage title="Contact">
			<form name="contact" method="POST" data-netlify="true">
				<input type="hidden" name="form-name" value="contact" />
				<div className="form-input">
					<label htmlFor="name">Name</label>
					<input name="name" type="text" placeholder="Jane" />
				</div>
				<div className="form-input">
					<label htmlFor="email">Email</label>
					<input name="email" type="enail" placeholder="jane@example.com" />
				</div>
				<div className="form-input">
					<label htmlFor="message">Name</label>
					<textarea name="message" id="" cols="30" rows="10" />
				</div>
				<div className="form-input">
					<button type="submit">Submit</button>
				</div>
			</form>
		</ContentPage>
	</Layout>
);

export default IndexPage;
