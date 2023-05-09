import React from 'react';

const FibonacciPointer = () => {
	const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34];

	const fibonacciCard = fibonacci.map((value) => (
		<div key={value}>
			<input type="radio" id={`fib-${value}`} name="fibonacci" value={value} />
			<label htmlFor={`fib-${value}`}>{value}</label>
		</div>
	));

	return <>{fibonacciCard}</>;
};

export default FibonacciPointer;
