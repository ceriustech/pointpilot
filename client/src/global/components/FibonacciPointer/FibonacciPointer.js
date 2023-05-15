import React, { useState } from 'react';
import Input from '../../../components/Input';
import { Container } from './styles';

const FibonacciPointer = ({ onSelectionChange }) => {
	const [selectedValue, setSelectedValue] = useState(0);
	const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34];

	function handleChange(event) {
		const value = parseInt(event.target.value, 10);
		setSelectedValue(value);
		onSelectionChange(value);
	}

	const fibonacciCard = fibonacci.map((value, idx) => (
		<Input
			key={idx}
			htmlFor={`fib-${value}`}
			label={value}
			id={`fib-${value}`}
			fieldName="fibonacci"
			type="radio"
			value={value}
			checked={selectedValue === value}
			onChange={handleChange}
		/>
	));

	return <Container>{fibonacciCard}</Container>;
};

export default FibonacciPointer;
