import React, { useState , useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Loading from './components/Loading/Loading';
import Character from './components/Character/Character';
import { Container } from 'reactstrap';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);
  const [query, setQuery] = useState('');

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(
    () => {
      axios.get('https://swapi.co/api/people')
        .then(response => {
          console.log(response.data)
          setCharacters(response.data.results);
        })
        .catch(error => console.error(error));  
    },
    []
  );

  const queryRX = new RegExp(query, 'i');

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SearchBar query={query} setQuery={setQuery} />
        
        {!characters && <Loading />}

        {characters && (<Container className='characters'>
          { characters.filter((character)=>{
            if (query=='') return true;
            return queryRX.test(character.name) || queryRX.test(character.gender);
          }).map(character => 
          <Character characterData={character} query={query}
          />
        )}
        </Container>
        )}
    </div>
  );
}

export default App;
