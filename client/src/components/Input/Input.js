import React from 'react';
import { InputContainer, InputLabel, InputField } from './styles';

const Input = (props) => {
	const {
		className,
		label,
		htmlFor,
		id,
		fieldName,
		type,
		value,
		placeHolder,
		onChange,
		onBlur,
		checked,
		autoCompleteValue,
	} = props;

	let field;

	if (type === 'radio') {
		field = (
			<InputContainer className={className}>
				{label && <InputLabel htmlFor={htmlFor}>{label}</InputLabel>}
				<InputField
					id={id}
					name={fieldName}
					type={type}
					placeholder={placeHolder}
					value={value}
					onChange={onChange}
					checked={checked}
				/>
			</InputContainer>
		);
	}

	field = (
		<InputContainer className={className}>
			{label && <InputLabel htmlFor={htmlFor}>{label}</InputLabel>}
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

	return field;
};

export default Input;
