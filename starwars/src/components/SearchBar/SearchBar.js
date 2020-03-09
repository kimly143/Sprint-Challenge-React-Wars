import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	return (
		<div className="search-bar-wrapper">
			
			<form
				className="search-form"
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				{/* search ----- onChange => save new value */}
				<input
					value={props.query}
					onChange={(event) => {
						props.setQuery(event.target.value);
					}}
					type="text"
					placeholder="Search"
				/>
			</form>
			
		</div>
	);
};

export default SearchBar;
