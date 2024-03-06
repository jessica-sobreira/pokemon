import axios from "axios";
import { Lista } from "../model/lista.model";
import { PokemonModel } from "../model/pokemon.model";


export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",

});

export async function listarPokemons() {
    try {
        const result = await api.get("/pokemon");
        return result.data as Lista;
        
    } catch (error: any) {
        alert(error.toString());
        console.log(error);
        return null;
    }
}

export async function buscarPokemonURL(url: string) {
    try {
        const result = await axios.get(url);
        return result.data as PokemonModel;

    } catch (error: any) {
        alert(error.toString());
        console.log(error);
        return null;
    }
    
}