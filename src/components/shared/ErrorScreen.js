import React from 'react';

const STEVEN = 'https://www.stevensegallery.com/640/360';

const ErrorScreen = ({ children }) => {
	return (
		<div className="error-screen">
			<p className="error-screen__text">{`upsss... ${children}`}</p>
			<img src={STEVEN} className="error-screen__image" />
		</div>
	);
};

export default ErrorScreen;
