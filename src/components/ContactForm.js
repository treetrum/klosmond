import React, { useState, useEffect } from 'react';
import SDTextInput from '../components/SDTextInput';

const ContactForm = () => {
	const inputs = {
		name: useInput(''),
		email: useInput('', validateEmail),
		message: useInput('')
	};

	const onFormSubmit = e => {
		let formValid = true;
		Object.keys(inputs)
			.map(k => inputs[k])
			.map(input => {
				const result = input.validate();
				formValid = formValid ? result : false;
			});
		if (!formValid) {
			e.preventDefault();
		}
	};

	return (
		<form className="sd-form" name="contact" method="POST" data-netlify="true" onSubmit={onFormSubmit}>
			<input type="hidden" name="form-name" value="contact" />
			<SDTextInput
				label="Name"
				name="name"
				placeholder="Jane Smith"
				value={inputs.name.value}
				onChange={inputs.name.onChange}
				error={inputs.name.error}
			/>
			<SDTextInput
				label="Email"
				name="email"
				placeholder="jane.smith@example.com"
				value={inputs.email.value}
				onChange={inputs.email.onChange}
				error={inputs.email.error}
			/>
			<SDTextInput
				label="Message"
				name="message"
				type="textarea"
				value={inputs.message.value}
				onChange={inputs.message.onChange}
				error={inputs.message.error}
			/>
			<div className="sd-input">
				<button className="sd-input__submit" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

const useInput = (defaultValue, customValidation = false) => {
	const [value, setValue] = useState(defaultValue);
	const [error, setError] = useState('');

	const onChange = e => {
		setValue(e.target.value);
	};

	const validate = () => {
		const status = value.trim() ? true : false;
		setError(status ? '' : 'This field is required');
		if (status && customValidation) {
			let a = customValidation(value);
			if (!a.valid) {
				setError(a.message);
			}
		}
		return status;
	};

	// Validates constantly if there's an error
	useEffect(() => {
		if (error) {
			validate();
		}
	}, [value]);

	return {
		value,
		error,
		onChange,
		validate
	};
};

const validateEmail = email => {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const result = re.test(String(email).toLowerCase());
	return {
		valid: result,
		message: result ? '' : 'Not a valid email'
	};
};

export default ContactForm;
