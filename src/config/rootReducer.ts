import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import themeSlice from "./modules/themeSlice";
import pokemonSlice from "./modules/pokemonSlice";


export const rootReducer = combineReducers({
    theme: themeSlice,
    pokemon: pokemonSlice,
    
 
});

export const persistedReducer = persistReducer(
    {
        key: "root",
        storage: storage
    },
    rootReducer
    )