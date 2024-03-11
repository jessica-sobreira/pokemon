import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import themeSlice from "./modules/themeSlice";
import paginacaoSlice from "./modules/paginacao.slice";
import pokemonSlice from "./modules/pokemonSlice";
import personagemSlice from "./modules/personagemSlice";
import habilidadeSlice from "./modules/habilidadeSlice";
// import pokedexSlice from "./modules/pokedexSlice";

export const rootReducer = combineReducers({
    theme: themeSlice,
    pokemon: pokemonSlice,
    paginacao: paginacaoSlice,
    personagem: personagemSlice,
    habilidade: habilidadeSlice,
    // pokedex: pokedexSlice,

});


export const persistedReducer = persistReducer(
    {
        key: "root",
        storage: storage
    },
    rootReducer
    )