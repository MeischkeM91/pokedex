// This file will contain function to format the data in order to be displayed properly

const formatPokemonName = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1)
};

const formatPokemonNumber = (num) =>{
    if(num > 0 && num <10){
        return `#00${num}`;
    }
    else if(num >= 10 && num <100){
        return `#0${num}`;
    }
    else {
        return `#${num}`;
    };
};

const getEngDexEntry = (data, num) =>{
    let pokemonData = data;
    let dexEntryNum = num;
    if(pokemonData.flavor_text_entries[dexEntryNum].language.name == 'en'){
        return pokemonData.flavor_text_entries[dexEntryNum].flavor_text;
    } else {
        dexEntryNum++;
        return getEngDexEntry(pokemonData, dexEntryNum);
    };
};

export {formatPokemonName, formatPokemonNumber, getEngDexEntry};