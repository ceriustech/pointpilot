import React from 'react';
import { Field } from 'formik';

const Input = (props) => {
	const { label, id, fieldName, type, values, placeHolder, autoCompleteValue } =
		props;

	return (
		<>
			<label htmlFor={fieldName}>{label}</label>
			<Field
				id={id}
				name={fieldName}
				type={type}
				placeholder={placeHolder}
				value={values}
				autoComplete={autoCompleteValue || ''}
			/>
		</>
	);
};

export default Input;
