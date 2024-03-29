import React, { useState, useEffect, useContext } from 'react';
import Input from '../../../Input';
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
	const [isSessionCodeValid, setIsSessionCodeValid] = useState(false);

	const { setSessionData } = useContext(AppContext);

	function handleSessionCode() {
		const code = Math.random().toString(36).substring(2, 8);
		setSessionCode(code);

		// If the session code is not empty, mark it as valid
		if (code !== '') {
			setIsSessionCodeValid(true);
		} else {
			setIsSessionCodeValid(false);
		}
	}

	function handleIconSelection(icon) {
		setSelectedIcon(icon);
		console.log('%cSELECED ICON DATA', 'font-size:2em;color:orange');
		console.log('Icon selected: ', icon);
		console.log('Type of icon: ', typeof icon);
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
				sessionName: formik.values.sessionName,
				userName: formik.values.userName,
				usernameColor: formik.values.usernameColor,
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
				<Input
					htmlFor="sessionName"
					label="Session Name"
					id="session-name"
					fieldName="sessionName"
					type="text"
					value={formik.values.sessionName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					autoCompleteValue-="off"
				/>
				<Input
					htmlFor="userName"
					label="User Name"
					id="user-name"
					fieldName="userName"
					type="text"
					value={formik.values.userName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					autoCompleteValue-="off"
				/>
				{formik.touched.userName && formik.errors.userName ? (
					<div>{formik.errors.userName}</div>
				) : null}
				<Input
					label="Username Color"
					id="username-color"
					type="color"
					value={userNameColor}
					onChange={(event) => setUserNameColor(event.target.value)}
				/>
				<Button fn={handleIconRendering} text={'Select a user icon'} />
				{showIcons && <Scrollable handleIconSelection={handleIconSelection} />}
				<div>
					<Button fn={handleSessionCode} text={'Generate Session Code'} />
					<p>Session Code: {sessionCode}</p>
					{!isSessionCodeValid && <div>Required</div>}
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
