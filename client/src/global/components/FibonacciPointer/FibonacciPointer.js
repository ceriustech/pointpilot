import React, { useState } from 'react';

const FibonacciPointer = ({ onSelectionChange }) => {
	const [selectedValue, setSelectedValue] = useState(0);
	const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34];

	function handleChange(event) {
		const value = parseInt(event.target.value, 10);
		setSelectedValue(value);
		onSelectionChange(value);
	}

	const fibonacciCard = fibonacci.map((value) => (
		<div key={value}>
			<input
				type="radio"
				id={`fib-${value}`}
				name="fibonacci"
				value={value}
				checked={selectedValue === value}
				onChange={handleChange}
			/>
			<label htmlFor={`fib-${value}`}>{value}</label>
		</div>
	));

	return <>{fibonacciCard}</>;
};

export default FibonacciPointer;
