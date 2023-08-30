const pokemonPage = {}




pokemonPage.insertHTML = (text) => {
    const sectioPag = document.getElementById("pagePokemon")
    sectioPag.parentNode.setAttribute("class","content custom")
    sectioPag.innerHTML= text
}

pokemonPage.viewPokemon = (pokemon) =>{
    pokemon
    .then((response) => pokemonPage.insertHTML(designPokemon(response)))
}

function designPokemon(pokemon){
    const movesLi = get20Moves(pokemon) 
    return `
    <div class="${pokemon.typePri} cabecalhoPokemon">
        <p>${pokemon.num}</p>
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.img}" alt="${pokemon.name}">
        <ol>
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
        </ol>
    </div>
    <div class="dataPokemon">
        <h4 class="title ${pokemon.typePri}">Abilidades</h4>
        <ol>
            ${pokemon.abilities.map((ability) => `<li>${ability}</li>`).join("")}
        </ol>

        <h4 class="title ${pokemon.typePri}">Base Epx.</h4>
        <p>${pokemon.baseExp}</p>

        <h4 class="title ${pokemon.typePri}">Status base</h4>
        <ol>
            ${pokemon.statsBase.map((stat) => `<li>${stat}</li>`).join("")}
        </ol>

        <h4 class="title ${pokemon.typePri}">Movimentos</h4>
        <ol id="moves">
        ${movesLi}
        </ol>
    </div>

    `
}
function get20Moves(pokemon) {
    moveslis = "";
    for(let i = 0; i < 20; i++) {moveslis += `<li>${pokemon.moves[i]}</li>`;}
    return moveslis;
    // ${pokemon.moves.map((move) => `<li>${move}</li>`).join("")}
}

