import './style.css';


// Calling the API and displaying to test that it works
const pokeList = document.querySelector('.pokemon-list');

let pokedex = 'kanto';

// Query the correct pokedex and return
async function getPokedex(dex){
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${dex}/`);
    const dexReturned = await response.json();
    return dexReturned;
};

// Display the list of pokemon in the dex to confirm it is working
function pokemonList(dexData){
    let pokedexList = dexData.pokemon_entries;
    for(let i=0;i<pokedexList.length;i++){
        let pokemonName = pokedexList[i].pokemon_species.name;
        pokeList.innerHTML += `${pokemonName} <br>`
    };
};

async function runPokeDex(dex){
    const getDex = await getPokedex(dex);
    pokemonList(getDex);
}

runPokeDex(pokedex);



/* const testPara = document.querySelector('.test')
testPara.innerText = 'Working'; */