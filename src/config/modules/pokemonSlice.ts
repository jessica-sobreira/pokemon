import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonModel } from "../../model/pokemon.model";


interface PokemonState {
  pokemonData: PokemonModel[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemonData: [],
  loading: false,
  error: null,
};

export const pokemonChamada = createAsyncThunk('pokemon/get', async (pokemonName: string) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados do Pokémon:', error);
      throw error;
    }
  });
  

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(pokemonChamada.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(pokemonChamada.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonData = action.payload;
      })
      .addCase(pokemonChamada.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Erro ao carregar os personagens';
      });
  },
});

export default pokemonSlice.reducer;
