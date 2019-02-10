import React from 'react';

const SDTextInput = ({ label, name, placeholder = '', value, onChange, type = 'text', error = false }) => {
	let input = null;
	if (type === 'textarea') {
		input = (
			<textarea
				className="sd-input__input sd-input__input--textarea"
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				rows="5"
			/>
		);
	} else {
		input = (
			<input
				className="sd-input__input"
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		);
	}
	return (
		<div className="sd-input">
			<label className="sd-input__label" htmlFor={name}>
				{label}
			</label>
			{input}
			{error && <p className="sd-input__error">{error}</p>}
		</div>
	);
};

export default SDTextInput;
