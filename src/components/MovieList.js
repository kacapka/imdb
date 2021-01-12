import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MovieList = () => {
	const { movies, loading, error } = useContext(AppContext);

	const renderList = () => {
		return movies.map(movie => {
			return <div key={movie.imdbID}>{movie.Title}</div>;
		});
	};

	if (loading) return 'loading...';
	if (error) return error;

	return renderList();
};

export default MovieList;
