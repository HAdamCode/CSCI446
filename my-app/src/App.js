import './App.css';
import React, { useState } from 'react';
import PokemonForm from './PokemonForm';
import PokemonList from './PokemonList';

function App() {
  const [pokemonList, addPokemon] = useState([]);

  const addedPokemon = (pokemonInfo) => {
    addPokemon([...pokemonList, pokemonInfo]);
  };

  return (
    <div className="App">
      <PokemonForm addPokemon={addedPokemon} />
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;
