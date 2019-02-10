import React, { useState } from 'react';
import SDTextInput from '../components/SDTextInput';

const ContactForm = () => {
	const [submitAttempted, setSubmitAttempted] = useState(false);
	const [inputValues, updateInputValues] = useState({ name: '', email: '', message: '' });
	const [inputErrors, updateInputErrors] = useState({ name: '', email: '', message: '' });

	const onInputChange = e => {
		const newValues = {
			...inputValues,
			[e.target.name]: e.target.value
		};
		updateInputValues(newValues);
		if (submitAttempted) {
			validateSingleInput(e.target.name, e.target.value);
		}
	};

	const onFormSubmit = e => {
		const isValid = validateAllInputs();
		if (!isValid) {
			e.preventDefault();
			setSubmitAttempted(true);
		}
	};

	const validateAllInputs = () => {
		const newErrors = { ...inputErrors };
		Object.keys(inputValues).forEach(key => {
			const value = inputValues[key];
			newErrors[key] = validationFunction(key, value);
		});
		updateInputErrors(newErrors);
		let isValid = true;
		Object.keys(newErrors).forEach(key => {
			const value = newErrors[key];
			isValid = !value;
		});
		return isValid;
	};

	const validateSingleInput = (key, value) => {
		const newErrors = { ...inputErrors, [key]: validationFunction(key, value) };
		updateInputErrors(newErrors);
	};

	const validationFunction = (key, value) => {
		let error = false;
		switch (key) {
			case 'name':
				if (value.length === 0) {
					error = 'Name is required';
					break;
				}
				break;
			case 'email':
				if (value.length === 0) {
					error = 'Email is required';
					break;
				}
				if (!validateEmail(value)) {
					error = 'Not a valid email address';
					break;
				}
				break;
			case 'message':
				if (value.length === 0) {
					error = 'Message is required';
					break;
				}
				break;
			default:
				break;
		}
		return error;
	};

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	return (
		<form className="sd-form" name="contact" method="POST" data-netlify="true" onSubmit={onFormSubmit}>
			<input type="hidden" name="form-name" value="contact" />
			<SDTextInput
				label="Name"
				name="name"
				placeholder="Jane Smith"
				error={inputErrors.name}
				value={inputValues.name}
				onChange={onInputChange}
			/>
			<SDTextInput
				label="Email"
				name="email"
				placeholder="jane.smith@example.com"
				value={inputValues.email}
				onChange={onInputChange}
				error={inputErrors.email}
			/>
			<SDTextInput
				label="Message"
				name="message"
				value={inputValues.message}
				onChange={onInputChange}
				type="textarea"
				error={inputErrors.message}
			/>
			<div className="sd-input">
				<button className="sd-input__submit" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
