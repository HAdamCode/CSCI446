import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default function PokemonForm({ addPokemon }) {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    const [...pokemonInfo] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const pokemonName = event.target[0].value;
        let response = fetch(`${URL}/${pokemonName}`)
            .then((data) => data.json())
            .then((json) => {
                pokemonInfo.name = json.name;
                pokemonInfo.sprite = json.sprites.front_default;
                pokemonInfo.id = json.id;
                pokemonInfo.uid = uuidv4()
                addPokemon(pokemonInfo);
            });
    }

    return (
        <div className="form-container">
            <h1>Pokemon Cards</h1>
            <form id="pokemonForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter a Pokemon name..." />
                <br />
                <button>Add</button>
            </form>
        </div>
    )
}