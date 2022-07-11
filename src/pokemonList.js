// This file contains the code to create the Pokemon list 
import getPokedex from './index';
import {formatPokemonName, formatPokemonNumber} from './formatData';

export default async function createPokemonList(dex){
    const pokemonList = document.querySelector('.pokemon-list');

    let test = dex;
    console.log(test);
    // Call the API and get the data
    const dexData = await getPokedex(dex);

    console.log(dexData);  //test purposes

    for(let i=0; i<=dexData.pokemon_entries.length; i++){
        // Declare var for each data point needed
        let pokemonNum = formatPokemonNumber(dexData.pokemon_entries[i].entry_number);
        let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`;
        let pokemonName = formatPokemonName(dexData.pokemon_entries[i].pokemon_species.name);
        createPokemonEntry(pokemonImg,pokemonName,pokemonNum);
    }

    function createPokemonEntry(image, name, num){
        // Container for entry
        const pokemonListEntry = document.createElement('div');
        pokemonListEntry.classList.add('pokemon-entry');
        // Elements inside container
        // Image
        const pokemonListImage = document.createElement('img');
        pokemonListImage.classList.add('pokemon-img');
        pokemonListImage.src = image;
        pokemonListImage.alt = name;
        // Name
        const pokemonListName = document.createElement('p');
        pokemonListName.classList.add('pokemon-name');
        pokemonListName.textContent = name;
        // Number
        const pokemonListNumber = document.createElement('p');
        pokemonListNumber.classList.add('pokemon-number');
        pokemonListNumber.textContent = num;

        // Create container
        pokemonList.appendChild(pokemonListEntry);
        pokemonListEntry.appendChild(pokemonListImage);
        pokemonListEntry.appendChild(pokemonListName);
        pokemonListEntry.appendChild(pokemonListNumber);
    };

};