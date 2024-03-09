import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonModel } from "../../model/pokemon.model";
import { buscarPokemonID } from "../../services/api.service";

export const getPokemonThunk = createAsyncThunk("personagem/get", async (id: number) => {
    const pokemonThunk = await buscarPokemonID(id);

    return pokemonThunk;
});

const personagemSlice = createSlice({
    name: "personagem",
    initialState: null as PokemonModel | null,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPokemonThunk.fulfilled, (_, action) => {
            return action.payload;
            
        })
    }
})

export default personagemSlice.reducer;