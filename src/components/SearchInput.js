import React from 'react';

const SearchInput = ({ value, onChange }) => {
	return (
		<input
			className="input"
			value={value}
			onChange={onChange}
			placeholder="search"
		/>
	);
};

export default SearchInput;
