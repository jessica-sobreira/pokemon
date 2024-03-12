import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonModel } from '../../model/pokemon.model';

interface PokedexState {
  favorites: PokemonModel[];
}

const initialState: PokedexState = {
  favorites: [],
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<PokemonModel>) => {
      state.favorites.push(action.payload);
    },
    
removeFavorite: (state, action: PayloadAction<number>) => {
  state.favorites = state.favorites.filter((pokemon) => pokemon.id !== action.payload);
}

  },
});
 

export const { addFavorite, removeFavorite } = pokedexSlice.actions;
export default pokedexSlice.reducer;

