export interface PokemonModel {
    id: number;
    name: string;
    height: number;
    sprites: PokemonFoto;
} 

export interface PokemonFoto {
    front_default: string;
}

