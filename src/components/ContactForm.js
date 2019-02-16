import React from 'react';
import SDTextInput from './SDTextInput';
import SDForm from './SDForm';
import { validateEmail } from '../utils/validators';
import { useInput } from '../utils/hooks';

const ContactForm = () => {
	const inputs = {
		name: useInput({ label: 'Name', name: 'name', placeholder: 'Jane Smith' }),
		email: useInput({
			label: 'Email',
			name: 'email',
			placeholder: 'jane.smith@example.com',
			validations: [validateEmail]
		}),
		message: useInput({ label: 'Message', name: 'message', type: 'textarea' })
	};

	return (
		<SDForm inputs={inputs} name="contact" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<SDTextInput {...inputs.name} />
			<SDTextInput {...inputs.email} />
			<SDTextInput {...inputs.message} />
			<div className="sd-input">
				<button className="sd-input__submit" type="submit">
					Submit
				</button>
			</div>
		</SDForm>
	);
};

export default ContactForm;
