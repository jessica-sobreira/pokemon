import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api.service";

interface Personagem {
 id: number;
 name: string;
 tamanho: number;
 imgUrl: string;

}

export const personagensThunk = createAsyncThunk("personagem/get", async () => {
 try {
   let pokemons: Personagem[] = [];

   for (let i = 1; i < 68; i++) {
     const response = await api.get(`/pokemon/${i}/`);
     
     const pokemom: Personagem = {
       id: response.data.id,
       name: response.data.name,
       tamanho: response.data.height,
       imgUrl: response.data.sprites.front_default,
     };
     pokemons.push(pokemom);
   }

   return pokemons;

 } catch (error) {
   throw error;
 }
});
const personagensSlice = createSlice({
 name: "personagens",
 initialState: [] as Personagem[],
 reducers: {},
 extraReducers: (builder) => {
   builder.addCase(
     personagensThunk.fulfilled, (state, action: PayloadAction<Personagem[]>) => {
       state.push(...action.payload);
     }
   );
 },
});

export default personagensSlice.reducer;





// export type Pokemon = {
//   name: string;
//   height: number;
//   weight: number;
//   types: {
//     type: {
//       name: string;
//     };
//   }[];
//   abilities: {
//     ability: {
//       name: string;
//     };
//   }[];
// };

// interface PokemonState {
//   data: Pokemon[];
// }

// const initialState: PokemonState = {
//   data: [],
// };

// export const pokemonData = createAsyncThunk("pokemon/fetchPokemon", async () => {
//   try {
//     const response = await api.get("/pokemon/?limit=10");
//     const pokemons = response.data.results.map(async(pokemon: any) => {
//     const pokemonUrl = await api.get(`pokemon/${pokemon.url}`); 
//       return pokemon.url;
//     }) 
//     console.log(pokemons);
   
//     return response.data.results;
//   } catch (error) {
//     console.error("Erro ao buscar os dados dos Pokémon:", error);
//     throw error;
//   }
// });


// const pokemonSlice = createSlice({
//   name: "pokemon",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(pokemonData.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
//       if (Array.isArray(action.payload)) {
//         state.data = action.payload;
//       } else {
//         console.error("Payload da ação pokemonData.fulfilled não é um array válido:", action.payload);
//       }
//     });
//   },
// });
   
  
   

// export default pokemonSlice.reducer;
