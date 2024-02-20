import { createSlice } from "@reduxjs/toolkit";

const pokemons = [
    {
        id: 1,
        nome: "Charmander",
        tamanho: "2m",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"

    },
    {
        id: 2,
        nome: "Bulbasaur",
        tamanho: "2m",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    }
]




const projetosSlice = createSlice({
    name: "projetos",
    initialState: pokemons,
    reducers: {},
});

export default projetosSlice.reducer;