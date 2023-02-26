import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";

export default function PokemonList({ pokemons }) {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemont, setPokemonList] = useState([]);

    const handleUpdateForm = (event, uid) => {
        event.preventDefault();
        const pokemon = event.target[0].value;
        let response = fetch(`${URL}/${pokemon}`)
            .then((data) => data.json())
            .then((updatedPokemon) => {
                console.log(uid)
                pokemons.map((pokemon) => (
                    console.log(pokemon.uid)
                ))
                console.log(updatedPokemon)
                setPokemonList(pokemons.map((p) => {
                    if (p.uid === uid) {
                        p.name = updatedPokemon.name
                        p.id = updatedPokemon.id;
                        p.uid = uid;
                        p.sprite = updatedPokemon.sprites.front_default;
                    }
                } ))
            });
    }
    console.log(pokemons)
    return (
        <div className="pokemon-list">
            <div className="card">
                {pokemons.map((pokemon) => (

                    <PokemonCard pokemon={pokemon} handleUpdate={handleUpdateForm} />

                ))}
            </div>
        </div>
    )
}