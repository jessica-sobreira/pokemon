export interface PokemonModel {
    id: number;
    name: string;
    height: number;
    sprites: PokemonFoto;
    abilities: PokemonHabilidade[];
    stats: any[];
} 

export interface PokemonFoto {
    front_default: string;
}

export interface PokemonHabilidade {
    effect: string;
}
