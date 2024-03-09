import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonModel } from "../../model/pokemon.model";
import { buscarPokemonHabilidade } from "../../services/api.service";


export const getHabilidadeThunk = createAsyncThunk("habilidade/get", async (id: number) => {
    const habilidadeThunk = await buscarPokemonHabilidade(id);
    return habilidadeThunk;
    
})

const habilidadeSlice = createSlice({
    name: "habilidade",
    initialState: null as PokemonModel | null,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getHabilidadeThunk.fulfilled, (_, action) => {
            return action.payload;
        })
    }

})

export default habilidadeSlice.reducer;