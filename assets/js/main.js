onload = function(){
    

    const moreButton = document.getElementById("loadMoreButton");

    const maxRecords = 151
    const limit = 8;
    let offset = 0; 




    loadPokemons();

    moreButton.addEventListener("click", () => {
        offset += limit;

        if ((offset + limit) >= maxRecords){
            const newLimit = maxRecords - offset
            loadPokemons(offset, newLimit);

            moreButton.parentElement.removeChild(moreButton);
        }else{
            loadPokemons(offset, limit);
        }


    })
}

function loadPokemons(of ,li){
    pokeApi.getListOfPokemons(of ,li).then((pokemonList = []) => {
        document.getElementById("pokemonList").innerHTML += pokemonList.map((pokemon) => `
            <li class="pokemon ${pokemon.typePri}">
                <span class="number">${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    
                    <img src="${pokemon.img}" alt="${pokemon.name}">
                </div>
            </li>
        `).join("");        
    })
}

