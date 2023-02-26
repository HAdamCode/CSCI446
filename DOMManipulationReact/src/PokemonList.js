import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import './PokemonList.css';

export default function PokemonList({ pokemonList }) {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemont, setPokemonList] = useState([]);
    const handleUpdateForm = (event, uid) => {
        event.preventDefault();
        const pokemonName = event.target[0].value;
        let response = fetch(`${URL}/${pokemonName}`)
            .then((data) => data.json())
            .then((updatedPokemon) => {
                console.log(uid)
                pokemonList.map((pokemon) => (
                    console.log(pokemon.uid)
                ))
                console.log(updatedPokemon)
                setPokemonList(pokemonList.map((pokemon) => {
                    if (pokemon.uid === uid) {
                        pokemon.name = updatedPokemon.name
                        pokemon.id = updatedPokemon.id;
                        pokemon.uid = uid;
                        pokemon.sprite = updatedPokemon.sprites.front_default;
                    }
                }))
            });
    }

    return (
        <div class="pokemon-container">
            {pokemonList.map((pokemon) => (
                <PokemonCard pokemon={pokemon} handleUpdate={handleUpdateForm} />
            ))}
        </div>
    )
}