import React, { useState, useContext } from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import { AppContext } from '../context/AppContext';

const Search = () => {
	const [value, setValue] = useState('');
	const { fetchMovies } = useContext(AppContext);

	const handleOnChange = e => {
		setValue(e.target.value);
	};

	const handleFetchMovies = e => {
		e.preventDefault();
		fetchMovies(value);
	};

	return (
		<form onSubmit={handleFetchMovies}>
			<SearchInput value={value} onChange={handleOnChange} />
			<SearchButton />
		</form>
	);
};

export default Search;
