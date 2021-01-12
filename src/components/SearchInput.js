import React from 'react';

const SearchInput = ({ value, onChange }) => {
	return (
		<input
			className="search-form__input"
			value={value}
			onChange={onChange}
			placeholder="search"
		/>
	);
};

export default SearchInput;
