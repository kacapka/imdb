import React, { useState } from 'react';
import Api from '../api/api';

export const AppContext = React.createContext({
	movies: [],
	fetchMovies: () => {},
	loading: false,
	error: false
});

const ContextProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchMovies = async search => {
		setLoading(true);
		setError(false);
		const response = await Api.fetchMovies(search);
		if (response.Error) {
			setError(response.Error);
		} else {
			setMovies(response.Search);
		}
		setLoading(false);
	};

	return (
		<AppContext.Provider value={{ movies, fetchMovies, loading, error }}>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
