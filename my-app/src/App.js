
import './App.css';
import React, { useState } from 'react';
import PokemonForm from './PokemonForm';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, addPokemons] = useState([]);

  const addPokemon = (pokemonInfo) => {
    addPokemons([...pokemons, pokemonInfo]);
  };
  console.log("Pokemons: " + pokemons);

  return (
    <div className="App">
      
      <PokemonForm addPokemon={addPokemon} />
      <PokemonList pokemons={pokemons} />
    </div>
    
  );
}

export default App;
