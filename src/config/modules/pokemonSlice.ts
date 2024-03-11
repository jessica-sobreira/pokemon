import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonModel } from "../../model/pokemon.model";
import { buscarPokemonURL, listarPokemons } from "../../services/api.service";
import { setCount } from "./paginacao.slice";
import { RootState } from "../store";

export const listarPokemonThunk = createAsyncThunk("pokemons/get", async (_, config) => {
  
  const state = config.getState() as RootState;

  const limit = state.paginacao.itensPerPage;

  const offset = (state.paginacao.page - 1) * state.paginacao.itensPerPage;
  
  const listaBasica = await listarPokemons(limit, offset);

  if(!listaBasica) {
    return [];
  }

  config.dispatch(setCount(listaBasica.count));

  const pokemons: PokemonModel[] = [];

  for(let pokemonItem of listaBasica.results) {
    const pokemon = await buscarPokemonURL(pokemonItem.url);

    if(pokemon !== null) {
      pokemons.push(pokemon);
    }
  }
  return pokemons;

});


const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: [] as PokemonModel[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listarPokemonThunk.fulfilled, (_, action) => {
      return action.payload;
    });

  }
});
      
export default pokemonsSlice.reducer;