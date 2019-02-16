import { useState, useEffect } from 'react';

export const useInput = ({
	defaultValue = '',
	validations = [],
	label = false,
	name = '',
	placeholder = '',
	type = 'text'
}) => {
	const [value, setValue] = useState(defaultValue);
	const [error, setError] = useState('');

	const onChange = e => {
		setValue(e.target.value);
	};

	const validate = () => {
		const status = value.trim() ? true : false;
		setError(status ? '' : `'${label}' is required`);
		if (status) {
			validations.forEach(validation => {
				let result = validation(value);
				if (!result.isValid) {
					setError(result.message);
				}
			});
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
		validate,
		label,
		name,
		placeholder,
		type
	};
};
