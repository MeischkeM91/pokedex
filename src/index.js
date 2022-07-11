import './style.css';
import createPokemonList from './pokemonList';


// Query the correct pokedex and return
export default async function getPokedex(dex){
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${dex}/`);
    const dexReturned = await response.json();
    return dexReturned;
};

// test code
console.log('test');
createPokemonList('kanto');

