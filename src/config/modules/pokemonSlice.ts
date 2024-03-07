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
    builder.addCase(listarPokemonThunk.fulfilled, (state, action) => {
      return action.payload;
    });
  }

});
    
export default pokemonsSlice.reducer;





















// import { api } from "../../services/api.service";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// interface NamedAPIResource {
//   url: string;
// }

// interface PokemonType {
//   id: number;
//   name: string;
//   base_experience: number;
//   tamanho: number;
//   imgUrl: string;
//   location_area_encounters: string;
//   moves: any[];
//   stats: any[];
// }

// export const getPokemons = createAsyncThunk("pokemons/get", async () => {
//   try {
//     const response = await api.get("/pokemon");
//     const pokemonPromises = response.data.results.map(async (item: NamedAPIResource) => {
//       const responsePokemon = await axios.get(item.url);
//       const pokemon: PokemonType = {
//         id: responsePokemon.data.id,
//         name: responsePokemon.data.name,
//         base_experience: responsePokemon.data.base_experience,
//         imgUrl: responsePokemon.data.sprites.front_default,
//         tamanho: responsePokemon.data.height,
//         location_area_encounters: responsePokemon.data.location_area_encounters,
//         moves: responsePokemon.data.moves,
//         stats: responsePokemon.data.stats,
//       };
//       return pokemon;
//     });
//     const pokemons = await Promise.all(pokemonPromises);
//     console.log(pokemons);
//     return pokemons;
//   } catch (error) {
//     throw error;
//   }
// });

// const pokemonSlice = createSlice({
//   name: "pokemons",
//   initialState: [] as PokemonType[],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getPokemons.fulfilled, (state, action) => {
//       state.push(...action.payload); 
//     });
//   },
// });

// export default pokemonSlice.reducer;








// export const getPokemons = createAsyncThunk("pokemons/get", async()=>{
//   const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");

//   const pokemonPromises = response.data.results.map(async (item:NamedAPIResource)=>{

//     const responsePokemon = await (await axios.get(item.url)).data;
   
    
//     const pokemon:PokemonType = {
//       id: responsePokemon.id,
//       name: responsePokemon.name,
//       base_experience: responsePokemon.base_experience,
//       height: responsePokemon.height,
//       weight: responsePokemon.weight,
//       location_area_encounters: responsePokemon.location_area_encounters,
//       moves: responsePokemon.moves,
//       stats: responsePokemon.stats,
//     };


//     return pokemon
//   })


//   const pokemons = await Promise.all(pokemonPromises);

//   console.log(pokemons);
  
   
// })










// interface Personagem {
//  id: number;
//  name: string;
//  tamanho: number;
//  imgUrl: string;
// }

// export const personagensThunk = createAsyncThunk("personagem/get", async () => {
//  try {
//    let pokemons: Personagem[] = [];

//    for (let i = 1; i < 1302; i++) {
//      const response = await api.get(`/pokemon/${i}/`);
     
//      const pokemom: Personagem = {
//        id: response.data.id,
//        name: response.data.name,
//        tamanho: response.data.height,
//        imgUrl: response.data.sprites.front_default,
//      };
//      pokemons.push(pokemom);
//    }

//    return pokemons;

//  } catch (error) {
//    throw error;
//  }
// });

// const pokemonSlice = createSlice({
//  name: "pokemons",
//  initialState: [] as Personagem[],
//  reducers: {},
//  extraReducers: (builder) => {
//    builder.addCase(
//      personagensThunk.fulfilled, (state, action: PayloadAction<Personagem[]>) => {
//        state = action.payload; 
//      }
//    );
//  },
// });

// export default pokemonSlice.reducer;
