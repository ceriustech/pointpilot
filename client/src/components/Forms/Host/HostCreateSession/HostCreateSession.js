import React, { useState } from 'react';
import Button from '../../../../global/components/Button/Button';
import { useFormik } from 'formik';
import { routes } from '../../../../routes/Routes';

const validate = (values) => {
	const errors = {};

	if (!values.firstName) {
		errors.firstName = 'Required';
	} else if (values.firstName.length > 15) {
		errors.firstName = 'Must be 15 characters or less';
	}

	if (!values.lastName) {
		errors.lastName = 'Required';
	} else if (values.lastName.length > 20) {
		errors.lastName = 'Must be 20 characters or less';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};

const HostCreateSession = () => {
	const [sessionCode, setSessionCode] = useState('');
	const [usernameColor, setUsernameColor] = useState('');
	const [usernameIcon, setUsernameIcon] = useState('');

	function updatePath(id) {
		const getSessionRoute =
			routes.find((route) => route.path.includes('id')) || [];
		let path = getSessionRoute.path;

		if (getSessionRoute.length > 0) {
			path = getSessionRoute.path.replace('id', id);
		}

		return path;
	}

	function handleSessionCode() {
		const code = Math.random().toString(36).substring(2, 8);
		setSessionCode(code);
	}

	const formik = useFormik({
		initialValues: {
			sessionName: '',
			userName: '',
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="sessionName">Session Name</label>
			<input
				id="session-name"
				name="sessionName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.sessionName}
			/>
			{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

			<label htmlFor="userName">User Name</label>
			<input
				id="user-name"
				name="userName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.userName}
			/>
			{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
			<label htmlFor="username-color">Username Color:</label>
			<input
				type="color"
				id="username-color"
				value={usernameColor}
				onChange={(event) => setUsernameColor(event.target.value)}
			/>
			<label htmlFor="username-icon">Username Icon:</label>
			<input
				type="file"
				id="username-icon"
				onChange={(event) =>
					setUsernameIcon(URL.createObjectURL(event.target.files[0]))
				}
			/>
			<div>
				<Button fn={handleSessionCode} text={'Generate Session Code'} />
				<p>Session Code: {sessionCode}</p>
			</div>
			<Button
				text={'Create session'}
				route={updatePath(sessionCode)}
				disable={!isSessionCodeGenerated}
			/>

			<button type="submit">Submit</button>
		</form>
	);
};

export default HostCreateSession;
