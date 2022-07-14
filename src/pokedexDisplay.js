// This file contains the code to create the Pokedex display 
import { getPokemon } from "./index";
import {formatPokemonName, formatPokemonNumber, getEngDexEntry} from './formatData';

const pokedexImage = document.querySelector('.pokedex-pokemon-image');
const pokedexNum = document.querySelector('.pokedex-pokemon-num');
const pokedexName = document.querySelector('.pokedex-pokemon-name');
const pokedexEntry = document.querySelector('.pokedex-pokemon-entry');

export default async function createPokedexDisplay(id){
    let pokemonData = await getPokemon(id);

    let pokedexImgDisplayed = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    let pokedexNumDisplayed = formatPokemonNumber(pokemonData.id);
    let pokedexNameDisplayed = formatPokemonName(pokemonData.name);
    let pokedexEntryDisplayed = getEngDexEntry(pokemonData, 0);
    
    pokedexImage.src = pokedexImgDisplayed;
    pokedexNum.textContent = pokedexNumDisplayed;
    pokedexName.textContent = pokedexNameDisplayed;
    pokedexEntry.textContent = pokedexEntryDisplayed;
};

