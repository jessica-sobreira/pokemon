import axios from "axios";
import { Lista } from "../model/lista.model";
import { PokemonModel } from "../model/pokemon.model";


export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",

});

export async function listarPokemons(limit: number, offset: number) {
    try {
        const result = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
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

export async function buscarPokemonID(id: number) {
    try {
        const result = await api.get(`/pokemon/${id}`);
        return result.data as PokemonModel;

    } catch (error: any) {
        alert(error.toString());
        console.log(error);
        return null;
    }
}

export async function buscarPokemonHabilidade(id: number) {
    try {
        const result = await api.get(`/pokemon/ability/${id}`);
        return result.data as PokemonModel;
    } catch (error: any) {
        alert(error.toString());
        console.log(error);
        return null;
    }
}
