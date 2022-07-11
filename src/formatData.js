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

export {formatPokemonName, formatPokemonNumber};