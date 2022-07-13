import './style.css';
import createPokemonList from './pokemonList';
import createPokedexDisplay from './pokedexDisplay';


// Query the correct pokedex and return
export default async function getPokedex(dex){
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${dex}/`);
    const dexReturned = await response.json();
    return dexReturned;
};

export async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const pokemonReturned = await response.json();
    return pokemonReturned;
};

// test code
createPokemonList('kanto');
createPokedexDisplay('4');

