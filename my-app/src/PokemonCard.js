import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

export default function PokemonCard({ pokemon, handleUpdate }) {
    // const [setPokemonCard] = useState([]);
    const URL = "https://pokeapi.co/api/v2/pokemon";
    const [inputValue, setInputName] = useState('');

    const handleInputChange = (event) => {
        setInputName(event.target.value);
    };
    return (
        <div id="card">
            <link rel="stylesheet" href="App.css" />
            <img src={pokemon.sprite} />
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
            <form id="pokemonForm" onSubmit={(e) => handleUpdate(e, pokemon.uid)} >
                <input type="text" placeholder={pokemon.name} onChange={handleInputChange}></input>
                <button type="submit">Update</button>
            </form>
            <p>You entered: {inputValue}</p>
        </div>
    );
}
// onChange={(e) => setUpdatedName(e.target.value)