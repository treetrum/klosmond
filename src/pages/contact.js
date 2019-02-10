import React from 'react';
import Layout from '../components/layout';
import ContentPage from '../templates/ContentPage';
import ContactForm from '../components/ContactForm';

const IndexPage = () => {
	return (
		<Layout>
			<ContentPage title="Contact" hideTitle>
				<div className="row">
					<div className="medium-6 columns">
						<ContactForm />
					</div>
				</div>
			</ContentPage>
		</Layout>
	);
};

export default IndexPage;
