import React from 'react';
import ContextProvider from '../context/AppContext';
import Search from './Search';

const App = () => (
	<div className="container">
		<ContextProvider>
			<Search />
		</ContextProvider>
	</div>
);

export default App;
