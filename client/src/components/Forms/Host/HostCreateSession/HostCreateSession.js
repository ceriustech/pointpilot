import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../global/components/Button/Button';
import { useFormik } from 'formik';
import { routes } from '../../../../routes/Routes';

const validate = (values) => {
	const errors = {};

	if (!values.userName) {
		errors.userName = 'Required';
	} else if (values.userName.length > 15) {
		errors.userName = 'Must be 15 characters or less';
	}
	return errors;
};

const HostCreateSession = () => {
	const [sessionCode, setSessionCode] = useState('');
	const [usernameColor, setUsernameColor] = useState('');
	const [usernameIcon, setUsernameIcon] = useState('#000000');

	const navigate = useNavigate();

	function updatePath(id) {
		const getSessionRoute = routes.find((route) => route.path.includes('id'));
		let path = getSessionRoute.path;

		if (getSessionRoute) {
			path = getSessionRoute.path.replace('id', id);
		}
		console.log('path', path);

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
			if (isSessionCodeGenerated) {
				navigate(updatePath(sessionCode));
			}
		},
	});

	console.log('ERRORS', formik.errors);

	const isSessionCodeGenerated = sessionCode !== '';

	return (
		<>
			<form
				onSubmit={formik.handleSubmit}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<label htmlFor="sessionName">Session Name</label>
				<input
					id="session-name"
					name="sessionName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.sessionName}
				/>

				<label htmlFor="userName">User Name</label>
				<input
					id="user-name"
					name="userName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.userName}
				/>
				{formik.errors.userName ? <div>{formik.errors.userName}</div> : null}

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
			</form>
			<div>
				<Button fn={handleSessionCode} text={'Generate Session Code'} />
				<p>Session Code: {sessionCode}</p>
			</div>
			<div>
				<Button
					text={'Create session'}
					disable={!isSessionCodeGenerated}
					route={updatePath(sessionCode)}
				/>
			</div>
		</>
	);
};

export default HostCreateSession;
