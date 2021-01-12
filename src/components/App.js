import React from 'react';
import ContextProvider from '../context/AppContext';
import Search from './Search';
import MovieList from './MovieList';

const App = () => (
	<div className="container">
		<ContextProvider>
			<Search />
			<MovieList />
		</ContextProvider>
	</div>
);

export default App;
