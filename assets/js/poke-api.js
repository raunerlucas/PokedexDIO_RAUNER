const pokeApi = {}

function pokemonApiToPokemon(pokemonDetail){
    const pokemon = new Pokemon;
    pokemon.num = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;

    const types = pokemonDetail.types.map((typeS) => typeS.type.name);
    const [type] = types
    
    pokemon.types = types
    pokemon.typePri = type
    
    pokemon.img = pokemonDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

function pokemonSpecToPokemon(pokemonDetail){
    const pokemon = new PokemonInfG;
    pokemon.num = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;
    const types = pokemonDetail.types.map((typeS) => typeS.type.name);
    const [type] = types
    pokemon.types = types
    pokemon.typePri = type
    pokemon.img = pokemonDetail.sprites.other.dream_world.front_default;

    pokemon.abilities = pokemonDetail.abilities.map((abilities) => abilities.ability.name);
    pokemon.baseExp = pokemonDetail.base_experience;
    
    pokemon.moves = pokemonDetail.moves.map((moves) => moves.move.name)
    pokemon.statsBase = pokemonDetail.stats.map((stats) => stats.stat.name + ": " + stats.base_stat)
    
    return pokemon;
}


pokeApi.getPokemonsDetails = (pokemon) => {
     return fetch(pokemon.url)
     .then((response) => response.json())
     .then(pokemonApiToPokemon)
}


pokeApi.getListOfPokemons = (offset = 0,limit = 10) =>{
    const urlPokemonsList = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(urlPokemonsList)
    .then((response) => response.json())
    .then((jasonBody) => jasonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
    .then((detailRequets) => Promise.all(detailRequets))
    .then((pokemonsDetails) => pokemonsDetails)
    
}

pokeApi.getPokemon = (numPokemon) =>{
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numPokemon}`
    return fetch(urlPokemon)
    .then((response) => response.json())
    .then((pokemon) => pokemonSpecToPokemon(pokemon))
}

