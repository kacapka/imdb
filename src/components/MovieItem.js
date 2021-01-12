import React from 'react';

const PLACEHOLDER = 'https://www.placecage.com/200/300';

const MovieItem = ({ movie }) => {
	return (
		<div className="movie-item">
			<img
				src={movie.Poster === 'N/A' ? PLACEHOLDER : movie.Poster}
				className="movie-item__poster"
			/>
			<div className="movie-item__details">
				<p className="movie-item__text">{movie.Title}</p>
				<p className="movie-item__text">({movie.Year})</p>
			</div>
		</div>
	);
};

export default MovieItem;
