import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Loader from './shared/Loader';
import ErrorScreen from './shared/ErrorScreen';
import MovieItem from './MovieItem';

const MovieList = () => {
	const { movies, loading, error } = useContext(AppContext);

	const renderList = () => {
		return movies.map(movie => (
			<MovieItem key={movie.imdbID} movie={movie} />
		));
	};

	if (loading) return <Loader />;
	if (error) return <ErrorScreen>{error}</ErrorScreen>;

	return <div className="movie-list">{renderList()}</div>;
};

export default MovieList;
