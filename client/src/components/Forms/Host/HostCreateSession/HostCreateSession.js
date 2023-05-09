import React, { useState, useEffect, useContext } from 'react';
import Scrollable from '../../../Scrollable/Scrollable';
import Button from '../../../../global/components/Button/Button';
import { useFormik } from 'formik';
import { routes } from '../../../../routes/Routes';
import AppContext from '../../../../contextProvider/AppContext';

const validate = (values) => {
	const errors = {};

	if (!values.userName) {
		errors.userName = 'Required';
	} else if (values.userName.length > 15) {
		errors.userName = 'Must be 15 characters or less';
	}
	return errors;
};

function disableButton(session, userNameValue, userNameError) {
	if (session === '' || userNameValue === '' || userNameError) {
		return true;
	}
	return false;
}

function updatePath(id) {
	const getSessionRoute = routes.find((route) => route.path.includes('id'));
	let path = getSessionRoute.path;

	if (getSessionRoute) {
		path = getSessionRoute.path.replace('id', id);
	}

	return path;
}

const HostCreateSession = () => {
	const [sessionCode, setSessionCode] = useState('');
	const [userNameColor, setUserNameColor] = useState('#000000');
	const [selectedIcon, setSelectedIcon] = useState(null);
	const [showIcons, setShowIcons] = useState(false);

	const { setSessionData } = useContext(AppContext);

	console.log('%cSESSION PROVIDER', 'font-size:2em;color:red');
	console.log(setSessionData);

	function handleSessionCode() {
		const code = Math.random().toString(36).substring(2, 8);
		setSessionCode(code);
	}

	function handleIconSelection(icon) {
		return () => {
			setSelectedIcon(icon);
		};
	}

	function handleIconRendering() {
		setShowIcons(!showIcons);
	}

	const formik = useFormik({
		initialValues: {
			sessionName: '',
			userName: '',
			usernameColor: userNameColor,
		},
		validate,
		onSubmit: (values) => {
			setSessionData({
				sessionName: values.sessionName,
				userName: values.userName,
				usernameColor: values.usernameColor,
				usernameIcon: selectedIcon,
				sessionId: sessionCode,
			});
		},
	});

	useEffect(() => {
		formik.setFieldValue('usernameColor', userNameColor);
	}, [userNameColor]);

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
					value={userNameColor}
					onChange={(event) => setUserNameColor(event.target.value)}
				/>
				<Button fn={handleIconRendering} text={'Select a user icon'} />
				{showIcons && <Scrollable handleIconSelection={handleIconSelection} />}
				<div>
					<Button fn={handleSessionCode} text={'Generate Session Code'} />
					<p>Session Code: {sessionCode}</p>
				</div>
				<div>
					<Button
						text={'Create session'}
						disable={disableButton(
							sessionCode,
							formik.values.userName,
							formik.errors.userName
						)}
						route={updatePath(sessionCode)}
						type="submit"
					/>
				</div>
			</form>
		</>
	);
};

export default HostCreateSession;
