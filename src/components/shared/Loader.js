import React from 'react';
import { default as LoaderComponent } from 'react-loader-spinner';

const Loader = () => {
	return (
		<LoaderComponent
			type="ThreeDots"
			color="#242424"
			height={80}
			width={80}
		/>
	);
};

export default Loader;
