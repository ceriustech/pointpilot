import React from 'react';
import { InputContainer, InputLabel, InputField } from './styles';

const Input = (props) => {
	const {
		label,
		id,
		fieldName,
		type,
		value,
		placeHolder,
		onChange,
		onBlur,
		autoCompleteValue,
	} = props;

	return (
		<InputContainer>
			<InputLabel htmlFor={fieldName}>{label}</InputLabel>
			<InputField
				id={id}
				name={fieldName}
				type={type}
				placeholder={placeHolder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				autoComplete={autoCompleteValue || ''}
			/>
		</InputContainer>
	);
};

export default Input;
