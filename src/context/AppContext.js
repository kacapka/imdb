import React, { useState } from 'react';
import Api from '../api/api';

export const AppContext = React.createContext({
	movies: [],
	fetchMovies: () => {},
	loading: false
});

const ContextProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchMovies = async search => {
		setLoading(true);
		const movies = await Api.fetchMovies(search);
		setMovies(movies.Search);
		setLoading(false);
	};

	return (
		<AppContext.Provider value={{ movies, fetchMovies, loading }}>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
