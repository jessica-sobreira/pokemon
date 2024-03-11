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
  },
});

export const { addFavorite } = pokedexSlice.actions;
export default pokedexSlice.reducer;

