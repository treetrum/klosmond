import React from 'react';

const SDForm = ({ inputs, children, className = '', ...remainingProps }) => {
	const onFormSubmit = e => {
		let formValid = true;
		Object.keys(inputs)
			.map(key => inputs[key])
			.forEach(input => {
				const result = input.validate();
				formValid = formValid ? result : false;
			});
		if (!formValid) {
			e.preventDefault();
		}
	};
	return (
		<form {...remainingProps} onSubmit={onFormSubmit} className={`sd-form ${className}`}>
			{children}
		</form>
	);
};

export default SDForm;
