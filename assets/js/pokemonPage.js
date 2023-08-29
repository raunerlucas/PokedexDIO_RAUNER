const pokemonPage = {}

pokemonPage.insertHTML = (text) => {
    document.getElementById("pagePokemon").innerHTML= text
}

pokemonPage.viewPokemon = (pokemon) =>{
    pokemon
    .then((response) => pokemonPage.insertHTML(designPokemon(response)))
}

function designPokemon(pokemon){
    return `
    <div class="${pokemon.typePri}">
        <p>${pokemon.num}</p>
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.img}" alt="${pokemon.name}">
        <h3>Tipos</h3>
        <ol>
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
        </ol>
    </div>
    <div>
        <h4>Abilidades</h4>
        <ol>
            ${pokemon.abilities.map((ability) => `<li>${ability}</li>`).join("")}
        </ol>

        <h4>Base Epx.</h4>
        <p>${pokemon.baseExp}</p>

        <h4>Status base</h4>
        <ol>
            ${pokemon.statsBase.map((stat) => `<li>${stat}</li>`).join("")}
        </ol>

        <h4>Movimentos</h4>
        <ol>
            ${pokemon.moves.map((move) => `<li>${move}</li>`).join("")}
        </ol>
    </div>

    `
}