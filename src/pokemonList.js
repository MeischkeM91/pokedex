// This file contains the code to create the Pokemon list 

export default function createPokemonList(dexImg, dexName, dexNum){
    const pokemonList = document.querySelector('.pokemon-list');

    let pokemonImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png';
    let pokemonName = 'Charmander';
    let pokemonNum = '#004';

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
    createPokemonEntry(pokemonImg,pokemonName,pokemonNum);
};