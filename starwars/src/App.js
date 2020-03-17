import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Loading from './components/Loading/Loading';
import Characters from './components/Characters/Characters';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
	const [ characters, setCharacters ] = useState(null);
	const [ query, setQuery ] = useState('');
	const [ nextpageUrl, setNextpageUrl ] = useState(null);

	useEffect(() => {
		axios
			.get('https://swapi.co/api/people')
			.then((response) => {
				console.log(response.data);
				setCharacters(response.data.results);
				setNextpageUrl(response.data.next);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<SearchBar query={query} setQuery={setQuery} />
			{!characters && <Loading />}
			{characters && (
				<Characters
					characters={characters}
					query={query}
					onLoadMore={() => {
						//fetch nextpage, update characters list, update nextpageUrl
						if (nextpageUrl === null) return;
						axios
							.get(nextpageUrl)
							.then((response) => {
								console.log(response.data);
								setCharacters(characters.concat(response.data.results));
								setNextpageUrl(response.data.next);
							})
							.catch((error) => console.error(error));
					}}
				/>
			)}
		</div>
	);
};

export default App;
